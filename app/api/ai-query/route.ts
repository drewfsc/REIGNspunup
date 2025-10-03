import { NextRequest, NextResponse } from 'next/server';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const REIGN_CONTEXT = `You are the AI assistant for R.E.I.G.N. (Real-time Employment Intelligence and Growth Navigator), 
a workforce management platform that eliminates bias in hiring and promotions.

Sample workforce data:
- Marcus Thompson (Senior Welder): MIG Welding Level 5 (2450hrs), TIG Welding Level 4 (1850hrs), Safety Level 5 (980hrs). Total: 5280 hours. PROMOTION READY.
- Sofia Martinez (Project Coordinator): Project Management Level 4 (1920hrs), Team Leadership Level 4 (1650hrs), Budget Analysis Level 3 (890hrs). Total: 4460 hours. PROMOTION READY.
- Jordan Kim (Quality Inspector): QA Level 3 (1240hrs), Documentation Level 3 (680hrs), Technical Writing Level 2 (420hrs). Total: 2340 hours.

Skill Levels: Level 1 (500hrs), Level 2 (1000hrs), Level 3 (1500hrs), Level 4 (2000hrs), Level 5 (2500+hrs)

Provide specific, data-driven insights based on verified hours and skill progression. Be professional, friendly, and emphasize bias-free decision making.`;

export async function POST(request: NextRequest) {
  try {
    const { question, useMCP } = await request.json();

    console.log('API Key present:', !!ANTHROPIC_API_KEY);
    console.log('Received question:', question);
    console.log('Use MCP:', useMCP);

    // If MCP mode is requested, try to query the MCP server
    if (useMCP) {
      try {
        const mcpResponse = await fetch('https://mindfulreign-mcp-server-staging.gcaussade.workers.dev/api/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: question }),
        });

        if (mcpResponse.ok) {
          const mcpData = await mcpResponse.json();
          console.log('MCP response received');
          return NextResponse.json({
            response: mcpData.response || mcpData.result || 'No response from MCP',
            mode: 'mcp-live',
          });
        }
      } catch (mcpError) {
        console.error('MCP query failed, falling back to Claude:', mcpError);
        // Fall through to Claude
      }
    }

    if (!ANTHROPIC_API_KEY) {
      console.warn('No ANTHROPIC_API_KEY found, using mock responses');
      // Fallback to mock responses if no API key
      return NextResponse.json({
        response: generateMockResponse(question),
        mode: 'mock',
      });
    }

    console.log('Calling Claude API...');
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `${REIGN_CONTEXT}\n\nUser question: ${question}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Claude API request failed');
    }

    const data = await response.json();
    console.log('Claude API response received');
    const aiResponse = data.content[0].text;

    return NextResponse.json({ 
      response: aiResponse,
      mode: 'claude',
    });
  } catch (error) {
    console.error('AI query error:', error);
    
    // Fallback to mock response
    try {
      const body = await request.json();
      return NextResponse.json({
        response: generateMockResponse(body.question),
        mode: 'mock-error',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    } catch {
      return NextResponse.json({
        response: 'An error occurred processing your request.',
        mode: 'error',
      });
    }
  }
}

function generateMockResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes('promotion')) {
    return `Based on verified hours and skill progression, **2 employees** are ready for promotion:

• **Marcus Thompson** (Senior Welder)
  - 5,280 total verified hours
  - Peak skills: MIG Welding (Level 5), TIG Welding (Level 4)
  - Recommendation: Ready for Lead Welder or Supervisor role

• **Sofia Martinez** (Project Coordinator)
  - 4,460 total verified hours
  - Peak skills: Project Management (Level 4), Team Leadership (Level 4)
  - Recommendation: Ready for Senior Project Manager advancement`;
  }

  if (lowerQuery.includes('wage') || lowerQuery.includes('raise') || lowerQuery.includes('increase')) {
    return `Analysis shows **1 employee** has met criteria for wage increase:

• **Marcus Thompson**
  - 2 skills at Level 5 (Master level)
  - 5,280 verified hours
  - Suggested increase: 10-15% based on skill progression and mastery achievement`;
  }

  if (lowerQuery.includes('team') || lowerQuery.includes('arrangement') || lowerQuery.includes('improvement')) {
    return `**Team Optimization Insights:**

**Skill Coverage Analysis:**
• Welding expertise: Strong (Marcus at Level 5)
• Project management: Growing (Sofia at Level 4)
• Quality control: Developing (Jordan at Level 3)

**Recommendations:**
1. Cross-train Jordan in advanced quality methods (360 hours to Level 4)
2. Pair Sofia with senior PM for leadership development
3. Consider Marcus for mentor role - proven expertise across welding disciplines

**Team Balance:** Strong skill distribution with clear growth paths for each member.`;
  }

  return `I analyze verified time-punch data, skill progression, and performance metrics to provide unbiased workforce insights.

**Try asking about:**
• Which employees are ready for promotion?
• Who deserves a wage increase?
• Team optimization suggestions
• Specific skill analysis`;
}


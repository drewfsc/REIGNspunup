import { NextRequest, NextResponse } from 'next/server';
import { subscribeToMailchimp, MAILCHIMP_LISTS, isValidEmail } from '@/app/lib/mailchimp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, phone, message } = body;

    // Validate required fields
    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, message: 'First name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Subscribe to Mailchimp
    const result = await subscribeToMailchimp(
      MAILCHIMP_LISTS.DEMO_REQUESTS,
      {
        email,
        firstName,
        lastName,
        company,
        phone,
        message,
        source: 'demo-request-form'
      },
      ['demo-request', 'high-intent-lead', 'website-contact']
    );

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully! We\'ll be in touch soon.'
    });
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

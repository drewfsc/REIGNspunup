// Mailchimp Integration Configuration
// API Documentation: https://mailchimp.com/developer/marketing/api/

const MAILCHIMP_API_KEY = '714f75f85955fbbfcaed5db8c79d6907-us21';
const MAILCHIMP_SERVER = 'us21'; // Extracted from API key
const MAILCHIMP_API_URL = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0`;

// Mailchimp List IDs - Update these with your actual list IDs from Mailchimp
export const MAILCHIMP_LISTS = {
  NEWSLETTER: 'your_newsletter_list_id',
  CONTACT_LEADS: 'your_contact_leads_list_id',
  DEMO_REQUESTS: 'your_demo_requests_list_id',
  GENERAL_INQUIRIES: 'your_general_inquiries_list_id'
};

export interface MailchimpContact {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  message?: string;
  source?: string;
}

export interface MailchimpResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Subscribe a contact to a Mailchimp list
 */
export async function subscribeToMailchimp(
  listId: string,
  contact: MailchimpContact,
  tags: string[] = []
): Promise<MailchimpResponse> {
  try {
    const subscriberData = {
      email_address: contact.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: contact.firstName || '',
        LNAME: contact.lastName || '',
        COMPANY: contact.company || '',
        PHONE: contact.phone || '',
        MESSAGE: contact.message || '',
        SOURCE: contact.source || 'website'
      },
      tags: tags
    };

    const response = await fetch(
      `${MAILCHIMP_API_URL}/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`
        },
        body: JSON.stringify(subscriberData)
      }
    );

    const data = await response.json();

    // Handle duplicate email addresses
    if (response.status === 400 && data.title === 'Member Exists') {
      // Update existing member instead
      return await updateMailchimpContact(listId, contact, tags);
    }

    if (!response.ok) {
      throw new Error(data.detail || 'Failed to subscribe to Mailchimp');
    }

    return {
      success: true,
      message: 'Successfully subscribed to Mailchimp'
    };
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    return {
      success: false,
      message: 'Failed to subscribe',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Update an existing Mailchimp contact
 */
async function updateMailchimpContact(
  listId: string,
  contact: MailchimpContact,
  tags: string[] = []
): Promise<MailchimpResponse> {
  try {
    const crypto = await import('crypto');
    const subscriberHash = crypto
      .createHash('md5')
      .update(contact.email.toLowerCase())
      .digest('hex');

    const updateData = {
      email_address: contact.email,
      status_if_new: 'subscribed',
      merge_fields: {
        FNAME: contact.firstName || '',
        LNAME: contact.lastName || '',
        COMPANY: contact.company || '',
        PHONE: contact.phone || '',
        MESSAGE: contact.message || '',
        SOURCE: contact.source || 'website'
      }
    };

    const response = await fetch(
      `${MAILCHIMP_API_URL}/lists/${listId}/members/${subscriberHash}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`
        },
        body: JSON.stringify(updateData)
      }
    );

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.detail || 'Failed to update contact');
    }

    // Add tags if provided
    if (tags.length > 0) {
      await addTagsToContact(listId, subscriberHash, tags);
    }

    return {
      success: true,
      message: 'Contact updated successfully'
    };
  } catch (error) {
    console.error('Mailchimp update error:', error);
    return {
      success: false,
      message: 'Failed to update contact',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Add tags to a contact
 */
async function addTagsToContact(
  listId: string,
  subscriberHash: string,
  tags: string[]
): Promise<void> {
  try {
    const tagData = {
      tags: tags.map(tag => ({ name: tag, status: 'active' }))
    };

    await fetch(
      `${MAILCHIMP_API_URL}/lists/${listId}/members/${subscriberHash}/tags`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`
        },
        body: JSON.stringify(tagData)
      }
    );
  } catch (error) {
    console.error('Error adding tags:', error);
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

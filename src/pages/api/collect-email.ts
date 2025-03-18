import { supabase } from '../../lib/supabase'

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  try {
    const { email } = await req.json()

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }])

    if (error) throw error

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error saving email:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to save email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
} 
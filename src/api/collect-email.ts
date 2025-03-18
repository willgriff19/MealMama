import { supabase } from '../lib/supabase'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

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
import { NextResponse } from 'next/server'

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID

export async function GET() {
  try {
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      throw new Error('Instagram credentials not configured')
    }

    const fields = 'id,media_type,media_url,permalink,caption,timestamp'
    const url = `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=${fields}&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=3`

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache por 1 hora
    })

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro ao buscar posts do Instagram:', error)
    
    // Retorna posts placeholder em caso de erro
    return NextResponse.json({
      data: [
        {
          id: 'placeholder-1',
          media_type: 'IMAGE',
          media_url: '/placeholder.svg?height=400&width=400&text=Instagram+Post+1',
          permalink: 'https://instagram.com/gabrielaferreira_psi',
          caption: 'Conecte-se comigo no Instagram para conteúdos sobre psicologia e bem-estar.',
          timestamp: new Date().toISOString(),
        },
        {
          id: 'placeholder-2',
          media_type: 'IMAGE',
          media_url: '/placeholder.svg?height=400&width=400&text=Instagram+Post+2',
          permalink: 'https://instagram.com/gabrielaferreira_psi',
          caption: 'Dicas e reflexões sobre Terapia Cognitivo Comportamental.',
          timestamp: new Date().toISOString(),
        },
        {
          id: 'placeholder-3',
          media_type: 'IMAGE',
          media_url: '/placeholder.svg?height=400&width=400&text=Instagram+Post+3',
          permalink: 'https://instagram.com/gabrielaferreira_psi',
          caption: 'Acompanhe meu trabalho e jornada profissional.',
          timestamp: new Date().toISOString(),
        },
      ]
    }, { status: 200 })
  }
}

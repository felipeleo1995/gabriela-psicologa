"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface InstagramPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchInstagramPosts()
  }, [])

  const fetchInstagramPosts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/instagram')
      
      if (!response.ok) {
        throw new Error('Erro ao carregar posts do Instagram')
      }
      
      const data = await response.json()
      setPosts(data.data?.slice(0, 3) || [])
    } catch (err) {
      setError('Não foi possível carregar os posts do Instagram')
      console.error('Erro ao buscar posts:', err)
      // Fallback para posts placeholder
      setPosts(getPlaceholderPosts())
    } finally {
      setIsLoading(false)
    }
  }

  const getPlaceholderPosts = (): InstagramPost[] => [
    {
      id: '1',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg?height=400&width=400&text=Post+1',
      permalink: 'https://instagram.com/gabrielaferreira_psi',
      caption: 'A vida que habita essa conta.',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg?height=400&width=400&text=Post+2',
      permalink: 'https://instagram.com/gabrielaferreira_psi',
      caption: 'O que você encontra aqui.',
      timestamp: new Date().toISOString(),
    },
    {
      id: '3',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg?height=400&width=400&text=Post+3',
      permalink: 'https://instagram.com/gabrielaferreira_psi',
      caption: 'Terapia Cognitivo Comportamental - o que é e como funciona.',
      timestamp: new Date().toISOString(),
    },
  ]

  const formatCaption = (caption: string = '') => {
    return caption.length > 100 ? caption.substring(0, 100) + '...' : caption
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden border border-gray-200 animate-pulse"
          >
            <div className="aspect-square bg-gray-300"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-lg card-rose-shadow overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 transform cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => window.open(post.permalink, '_blank')}
        >
          <div className="aspect-square relative">
            <Image
              src={post.media_url || "/placeholder.svg"}
              alt={`Post do Instagram: ${formatCaption(post.caption)}`}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder.svg?height=400&width=400&text=Instagram+Post'
              }}
            />
            {post.media_type === 'VIDEO' && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </div>
            )}
            {post.media_type === 'CAROUSEL_ALBUM' && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
          
          {post.caption && (
            <div className="p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {formatCaption(post.caption)}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(post.timestamp).toLocaleDateString('pt-BR')}
              </p>
            </div>
          )}
        </div>
      ))}
      
      {error && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchInstagramPosts}
            className="text-rose-500 hover:text-rose-600 underline"
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  )
}

import { Search, ChevronRight, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChevronRight className="h-5 w-5" />
            <span className="font-semibold">OpenRouter</span>
          </div>
          
          <div className="relative max-w-md w-full mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200" 
                placeholder="Search models" 
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">/</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/models" className="text-sm font-medium">Models</Link>
            <Link to="/chat" className="text-sm font-medium">Chat</Link>
            <Link to="/rankings" className="text-sm font-medium">Rankings</Link>
            <Link to="/docs" className="text-sm font-medium">Docs</Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="sr-only">Menu</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm">
                h
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6">
                The Unified<br />
                Interface For LLMs
              </h1>
              <p className="text-xl mb-6">
                Better <span className="text-indigo-500">prices</span>, better <span className="text-indigo-500">uptime</span>, no subscription.
              </p>
              <div className="relative max-w-xl">
                <Input 
                  className="w-full py-6 pl-4 pr-12 rounded-md border border-gray-200" 
                  placeholder="Start a message..." 
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-md bg-indigo-600 p-2">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Featured Models</h2>
                <Link to="/trending" className="text-sm text-indigo-500 flex items-center">
                  View Trending
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <ModelCard 
                name="Gemini 2.5 Pro Preview"
                provider="google"
                tokensPerWeek="204.5B"
                latency="2.2s"
                growth="+27.2%"
                icon="✨"
              />
              
              <ModelCard 
                name="GPT-4.1"
                provider="openai"
                tokensPerWeek="41.4B"
                latency="820ms"
                growth="-9.44%"
                icon="⚙️"
                negativeGrowth
              />
              
              <ModelCard 
                name="Claude Sonnet 4"
                provider="anthropic"
                tokensPerWeek="232.2B"
                latency="1.9s"
                growth="--"
                icon="🅐"
                isNew
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center py-12">
            <StatCard value="7.9T" label="Monthly Tokens" />
            <StatCard value="2M" label="Global Users" />
            <StatCard value="50+" label="Active Providers" />
            <StatCard value="300+" label="Models" />
          </div>
        </div>
      </main>
    </div>
  )
}

interface ModelCardProps {
  name: string
  provider: string
  tokensPerWeek: string
  latency: string
  growth: string
  icon: string
  isNew?: boolean
  negativeGrowth?: boolean
}

const ModelCard = ({ 
  name, 
  provider, 
  tokensPerWeek, 
  latency, 
  growth, 
  icon,
  isNew,
  negativeGrowth
}: ModelCardProps) => {
  return (
    <Card className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{name}</h3>
            {isNew && <Badge className="bg-gray-200 text-gray-800 text-xs">New</Badge>}
          </div>
          <p className="text-sm text-gray-500">by {provider}</p>
        </div>
        <div className="flex items-center justify-center h-8 w-8 bg-gray-100 rounded-md">
          {icon}
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4">
        <div className="flex flex-col">
          <span className="text-green-600 font-medium">{tokensPerWeek}</span>
          <span className="text-xs text-gray-500">Tokens/wk</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{latency}</span>
          <span className="text-xs text-gray-500">Latency</span>
        </div>
        <div className="flex flex-col">
          <span className={`font-medium ${negativeGrowth ? 'text-red-500' : 'text-green-600'}`}>{growth}</span>
          <span className="text-xs text-gray-500">Weekly growth</span>
        </div>
      </div>
    </Card>
  )
}

interface StatCardProps {
  value: string
  label: string
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-indigo-500">{value}</span>
      <span className="text-gray-500">{label}</span>
    </div>
  )
}

export default Index
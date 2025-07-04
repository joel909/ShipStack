import Image from "next/image";
import { Github, Zap, Rocket, ArrowRight, Terminal, GitBranch, Shield, Code2, Server, Globe } from "lucide-react";
import Footer from "./components/CoreComponents/footer";
export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-blue-600">ShipStack</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#docs" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Docs</a>
            <a href="#github" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Next.js • Self-Hosted • Production Ready
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Ship your apps
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                anywhere you want
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The open-source deployment platform that gives you Vercel's developer experience 
              with the freedom to deploy on your own infrastructure.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Rocket className="w-5 h-5" />
              <span>Deploy Your App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 backdrop-blur-sm bg-white/50">
              <Terminal className="w-5 h-5" />
              <span>View Demo</span>
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-500 ml-4 text-sm font-medium">~ Deploy in seconds</span>
            </div>
            <div className="text-left font-mono text-sm">
              <div className="text-slate-500">$ git clone your-repo</div>
              <div className="text-slate-500">$ cd your-project</div>
              <div className="text-blue-600 font-medium">$ shipstack deploy</div>
              <div className="text-green-600 mt-2 font-medium">✅ Deployed to https://your-app.yourdomain.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to ship fast
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Deploy any framework with the power and flexibility of your own infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Lightning Fast</h3>
              <p className="text-slate-600 leading-relaxed">
                Deploy in seconds with our optimized build pipeline. Global CDN and edge caching included for maximum performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Secure by Default</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatic SSL certificates, DDoS protection, and security headers. Your apps are protected from day one.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Any Framework</h3>
              <p className="text-slate-600 leading-relaxed">
                React, Vue, Angular, Svelte, Next.js, Nuxt, and more. Deploy any static site or full-stack application.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Git Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect your GitHub, GitLab, or Bitbucket repository. Automatic deployments on every push to production.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Your Infrastructure</h3>
              <p className="text-slate-600 leading-relaxed">
                Deploy to AWS, Google Cloud, Azure, or your own servers. Full control over your hosting environment.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Global Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                Edge locations worldwide ensure your users get the fastest possible experience, no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100k+</div>
              <div className="text-slate-600 font-medium">Apps Deployed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600 font-medium">Uptime SLA</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15s</div>
              <div className="text-slate-600 font-medium">Average Deploy Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to ship your next project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have chosen freedom over vendor lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Github className="w-5 h-5" />
              <span>Star on GitHub</span>
            </button>
            <button className="border border-blue-300 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 backdrop-blur-sm">
              <span>Quick Start Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      
    </div>
  
  );
}

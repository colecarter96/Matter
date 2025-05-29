import MacWindow from '../components/MacWindow'

export default function StockAutomationPage() {
  return (
    <main className="content-area min-h-screen pt-16 sm:pt-20 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large+ screens: Flexible layout */}
        <div className="hidden lg:flex lg:gap-6">
          {/* Left side - Description and Tech Stack */}
          <div className="flex-1 space-y-6">
            {/* Description - Auto-sized based on content */}
            <MacWindow
              title="Project Description"
              date="Stock Automation System"
              status="active"
              description=""
              size="large"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Stock Automation Trading System</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4">
                    An advanced algorithmic trading system designed to automate stock market operations 
                    using machine learning and real-time market data analysis. The system implements 
                    sophisticated trading strategies while maintaining strict risk management protocols.
                  </p>
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Real-time market data processing and analysis</li>
                    <li>Machine learning-powered price prediction models</li>
                    <li>Automated trade execution with customizable strategies</li>
                    <li>Advanced risk management and stop-loss mechanisms</li>
                    <li>Portfolio optimization and diversification algorithms</li>
                    <li>Backtesting framework for strategy validation</li>
                    <li>Real-time performance monitoring and alerts</li>
                    <li>Integration with multiple broker APIs</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-3">Trading Strategies</h3>
                  <p className="mb-4">
                    The system employs multiple trading strategies including momentum trading, 
                    mean reversion, arbitrage opportunities, and sentiment analysis based on 
                    news and social media data.
                  </p>

                  <h3 className="text-lg font-medium mt-6 mb-3">Performance Metrics</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sharpe Ratio: 2.34 (12-month period)</li>
                    <li>Maximum Drawdown: 8.2%</li>
                    <li>Win Rate: 67%</li>
                    <li>Average Daily Volume: $2.4M</li>
                    <li>Risk-Adjusted Returns: 18.7% annually</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-3">Architecture</h3>
                  <p className="mb-4">
                    Built on a microservices architecture with separate modules for data ingestion, 
                    analysis, strategy execution, and monitoring. The system is designed for high 
                    availability and can process thousands of market updates per second.
                  </p>
                </div>
              </div>
            </MacWindow>

            {/* Tech Stack */}
            <MacWindow
              title="Technology Stack"
              date="Implementation Details"
              status="active"
              description=""
              size="medium"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Backend & Infrastructure</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm">Python 3.11 + FastAPI</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-sm">PostgreSQL + Redis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-sm">Apache Kafka</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-sm">Docker + Kubernetes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                        <span className="text-sm">AWS Cloud Infrastructure</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">ML & Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="text-sm">TensorFlow + PyTorch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="text-sm">Pandas + NumPy</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span className="text-sm">Apache Airflow</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        <span className="text-sm">Prometheus + Grafana</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        <span className="text-sm">ElasticSearch</span>
                      </div>
                    </div>
                  </div>

                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-3">External APIs & Data Sources</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>• Alpha Vantage API</div>
                    <div>• Interactive Brokers TWS</div>
                    <div>• Yahoo Finance</div>
                    <div>• Polygon.io</div>
                    <div>• News API</div>
                    <div>• Twitter API v2</div>
                  </div>
                </div>
              </div>
            </MacWindow>
          </div>

          {/* Right side - Figma (fixed width, full height) */}
          <div className="w-80 xl:w-96">
            <MacWindow
              title="System Architecture"
              date="Design & Wireframes"
              status="completed"
              description=""
              size="large"
              className="h-[calc(100vh-8rem)]"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Architecture Diagram</h3>
                    <p className="text-sm text-gray-600 mb-4">System flow and component interactions</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                      View in Figma
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Design Components</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dashboard Wireframes</li>
                    <li>• Trading Interface Mockups</li>
                    <li>• Data Flow Diagrams</li>
                    <li>• API Documentation</li>
                  </ul>
                </div>
              </div>
            </MacWindow>
          </div>
        </div>

        {/* Medium and smaller screens: Stacked layout */}
        <div className="lg:hidden space-y-6">
          
          {/* Description Window */}
          <MacWindow
            title="Project Description"
            date="Stock Automation System"
            status="active"
            description=""
            size="large"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Stock Automation Trading System</h2>
              <div className="prose prose-sm max-w-none">
                <p className="mb-4">
                  An advanced algorithmic trading system designed to automate stock market operations 
                  using machine learning and real-time market data analysis. The system implements 
                  sophisticated trading strategies while maintaining strict risk management protocols.
                </p>
                
                <h3 className="text-lg font-medium mt-6 mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Real-time market data processing and analysis</li>
                  <li>Machine learning-powered price prediction models</li>
                  <li>Automated trade execution with customizable strategies</li>
                  <li>Advanced risk management and stop-loss mechanisms</li>
                  <li>Portfolio optimization and diversification algorithms</li>
                  <li>Backtesting framework for strategy validation</li>
                  <li>Real-time performance monitoring and alerts</li>
                  <li>Integration with multiple broker APIs</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">Trading Strategies</h3>
                <p className="mb-4">
                  The system employs multiple trading strategies including momentum trading, 
                  mean reversion, arbitrage opportunities, and sentiment analysis based on 
                  news and social media data.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">Performance Metrics</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sharpe Ratio: 2.34 (12-month period)</li>
                  <li>Maximum Drawdown: 8.2%</li>
                  <li>Win Rate: 67%</li>
                  <li>Average Daily Volume: $2.4M</li>
                  <li>Risk-Adjusted Returns: 18.7% annually</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">Architecture</h3>
                <p className="mb-4">
                  Built on a microservices architecture with separate modules for data ingestion, 
                  analysis, strategy execution, and monitoring. The system is designed for high 
                  availability and can process thousands of market updates per second.
                </p>
              </div>
            </div>
          </MacWindow>

          {/* Figma Window */}
          <MacWindow
            title="System Architecture"
            date="Design & Wireframes"
            status="completed"
            description=""
            size="medium"
          >
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Architecture Diagram</h3>
                  <p className="text-xs text-gray-600 mb-3">System flow and interactions</p>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                    View in Figma
                  </button>
                </div>
              </div>
            </div>
          </MacWindow>

          {/* Tech Stack Window */}
          <MacWindow
            title="Technology Stack"
            date="Implementation Details"
            status="active"
            description=""
            size="medium"
          >
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-3">Backend & Infrastructure</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm">Python 3.11 + FastAPI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm">PostgreSQL + Redis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-sm">Apache Kafka</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm">Docker + Kubernetes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                      <span className="text-sm">AWS Cloud Infrastructure</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">ML & Analytics</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm">TensorFlow + PyTorch</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-sm">Pandas + NumPy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span className="text-sm">Apache Airflow</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span className="text-sm">Prometheus + Grafana</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      <span className="text-sm">ElasticSearch</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-3">External APIs & Data Sources</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>• Alpha Vantage API</div>
                  <div>• Interactive Brokers TWS</div>
                  <div>• Yahoo Finance</div>
                  <div>• Polygon.io</div>
                  <div>• News API</div>
                  <div>• Twitter API v2</div>
                </div>
              </div>
            </div>
          </MacWindow>

        </div>

      </div>
    </main>
  )
}

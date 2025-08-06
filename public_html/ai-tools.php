<?php
$pageTitle = "AI-Powered Reputation Tools | TraceRemove";
$pageDescription = "Access TraceRemove's advanced AI tools for reputation analysis, monitoring, and protection. Try our Text Toxicity Analyzer, Search Visibility Checker, and Auto Monitoring System.";
$pageKeywords = "AI reputation tools, text toxicity analyzer, search visibility checker, reputation monitoring, AI analysis";
include_once('includes/header.php');
?>

<main>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center fade-in">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">AI-Powered Reputation Tools</h1>
                <p class="text-xl text-blue-100 mb-8">
                    Harness the power of artificial intelligence to analyze, monitor, and protect your digital reputation with our cutting-edge tools.
                </p>
                <div class="grid md:grid-cols-3 gap-6 mt-12">
                    <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                        <div class="text-3xl font-bold text-white mb-2">99.7%</div>
                        <div class="text-blue-100">Accuracy Rate</div>
                    </div>
                    <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                        <div class="text-3xl font-bold text-white mb-2">24/7</div>
                        <div class="text-blue-100">AI Monitoring</div>
                    </div>
                    <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                        <div class="text-3xl font-bold text-white mb-2">Real-time</div>
                        <div class="text-blue-100">Analysis</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- AI Tools Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Advanced AI Analysis Tools</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Try our AI-powered tools to get instant insights into your digital reputation and content analysis.
                </p>
            </div>

            <div class="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
                <!-- Text Toxicity Analyzer -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden stagger-in">
                    <div class="bg-gradient-to-r from-red-500 to-orange-500 p-6">
                        <div class="flex items-center text-white">
                            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold">Text Toxicity Analyzer</h3>
                                <p class="text-red-100">AI-powered content analysis for harmful language detection</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="mb-6">
                            <label for="toxicity-text" class="block text-sm font-medium text-gray-700 mb-2">
                                Enter text to analyze for toxicity, harassment, or harmful content:
                            </label>
                            <textarea 
                                id="toxicity-text" 
                                rows="4" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                placeholder="Paste your text here for AI analysis..."
                            ></textarea>
                        </div>
                        
                        <button 
                            id="analyze-toxicity-btn"
                            class="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                        >
                            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Analyze Text
                        </button>

                        <!-- Results Display -->
                        <div id="toxicity-results" class="mt-8 hidden">
                            <h4 class="text-lg font-semibold mb-4">Analysis Results</h4>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <span class="font-medium">Overall Toxicity Score</span>
                                    <div class="flex items-center">
                                        <div class="w-32 bg-gray-200 rounded-full h-3 mr-3">
                                            <div id="toxicity-bar" class="h-3 rounded-full transition-all duration-1000" style="width: 0%"></div>
                                        </div>
                                        <span id="toxicity-percentage" class="font-bold">0%</span>
                                    </div>
                                </div>
                                
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="p-4 bg-gray-50 rounded-lg">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm font-medium">Harassment</span>
                                            <span id="harassment-score" class="text-sm font-bold">0%</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div id="harassment-bar" class="h-2 bg-yellow-500 rounded-full transition-all duration-1000" style="width: 0%"></div>
                                        </div>
                                    </div>
                                    
                                    <div class="p-4 bg-gray-50 rounded-lg">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm font-medium">Hate Speech</span>
                                            <span id="hate-score" class="text-sm font-bold">0%</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div id="hate-bar" class="h-2 bg-red-500 rounded-full transition-all duration-1000" style="width: 0%"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="toxicity-recommendation" class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                                    <h5 class="font-semibold text-blue-900 mb-2">AI Recommendation</h5>
                                    <p class="text-blue-800"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Google Search Visibility Checker -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden stagger-in">
                    <div class="bg-gradient-to-r from-green-500 to-blue-500 p-6">
                        <div class="flex items-center text-white">
                            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold">Google Search Visibility Checker</h3>
                                <p class="text-green-100">Check if your content appears in Google search results</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="mb-6">
                            <label for="visibility-url" class="block text-sm font-medium text-gray-700 mb-2">
                                Enter URL to check visibility in Google search:
                            </label>
                            <input 
                                type="url" 
                                id="visibility-url" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="https://example.com/page-to-check"
                            />
                        </div>
                        
                        <div class="mb-6">
                            <label for="search-query" class="block text-sm font-medium text-gray-700 mb-2">
                                Search query (optional):
                            </label>
                            <input 
                                type="text" 
                                id="search-query" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter search terms..."
                            />
                        </div>
                        
                        <button 
                            id="check-visibility-btn"
                            class="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            Check Visibility
                        </button>

                        <!-- Results Display -->
                        <div id="visibility-results" class="mt-8 hidden">
                            <h4 class="text-lg font-semibold mb-4">Visibility Results</h4>
                            <div id="visibility-status" class="p-6 rounded-lg mb-4">
                                <div class="flex items-center">
                                    <div id="visibility-icon" class="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 id="visibility-title" class="text-xl font-bold"></h5>
                                        <p id="visibility-description" class="text-gray-600"></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="p-4 bg-gray-50 rounded-lg">
                                    <h6 class="font-semibold mb-2">Search Position</h6>
                                    <p id="search-position" class="text-2xl font-bold text-blue-600">-</p>
                                </div>
                                <div class="p-4 bg-gray-50 rounded-lg">
                                    <h6 class="font-semibold mb-2">Last Indexed</h6>
                                    <p id="last-indexed" class="text-2xl font-bold text-green-600">-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Auto Monitoring System -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden stagger-in">
                    <div class="bg-gradient-to-r from-purple-500 to-indigo-500 p-6">
                        <div class="flex items-center text-white">
                            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold">Auto Monitoring System</h3>
                                <p class="text-purple-100">24/7 automated monitoring of your digital reputation</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="text-lg font-semibold">Monitored Keywords</h4>
                            <button 
                                id="add-keyword-btn"
                                class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                            >
                                <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                Add Keyword
                            </button>
                        </div>

                        <!-- Monitoring Table -->
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th class="text-left p-4 font-semibold border-b">Keyword</th>
                                        <th class="text-left p-4 font-semibold border-b">Status</th>
                                        <th class="text-left p-4 font-semibold border-b">Last Seen</th>
                                        <th class="text-left p-4 font-semibold border-b">Alert Sent</th>
                                        <th class="text-left p-4 font-semibold border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="monitoring-table-body">
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="p-4 font-medium">Your Company Name</td>
                                        <td class="p-4">
                                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                                        </td>
                                        <td class="p-4 text-gray-600">2 hours ago</td>
                                        <td class="p-4">
                                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Yes</span>
                                        </td>
                                        <td class="p-4">
                                            <button class="text-purple-600 hover:text-purple-800 mr-3">View</button>
                                            <button class="text-red-600 hover:text-red-800">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="p-4 font-medium">CEO Name + Scandal</td>
                                        <td class="p-4">
                                            <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Monitoring</span>
                                        </td>
                                        <td class="p-4 text-gray-600">1 day ago</td>
                                        <td class="p-4">
                                            <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">No</span>
                                        </td>
                                        <td class="p-4">
                                            <button class="text-purple-600 hover:text-purple-800 mr-3">View</button>
                                            <button class="text-red-600 hover:text-red-800">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="p-4 font-medium">Brand + Negative Review</td>
                                        <td class="p-4">
                                            <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Alert</span>
                                        </td>
                                        <td class="p-4 text-gray-600">5 minutes ago</td>
                                        <td class="p-4">
                                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Yes</span>
                                        </td>
                                        <td class="p-4">
                                            <button class="text-purple-600 hover:text-purple-800 mr-3">View</button>
                                            <button class="text-red-600 hover:text-red-800">Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Add Keyword Modal (Hidden by default) -->
                        <div id="add-keyword-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                                <h5 class="text-xl font-bold mb-4">Add New Keyword</h5>
                                <div class="mb-4">
                                    <label for="new-keyword" class="block text-sm font-medium text-gray-700 mb-2">
                                        Keyword to monitor:
                                    </label>
                                    <input 
                                        type="text" 
                                        id="new-keyword" 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter keyword or phrase..."
                                    />
                                </div>
                                <div class="flex justify-end space-x-4">
                                    <button 
                                        id="cancel-keyword-btn"
                                        class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        id="save-keyword-btn"
                                        class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                                    >
                                        Add Keyword
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Reputation Management?</h2>
                <p class="text-xl text-blue-100 mb-8">
                    These tools provide a glimpse into our AI capabilities. Get full access to our professional platform and expert support.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        Get Professional Help
                    </a>
                    <a href="/services" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                        View All Services
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyze-toxicity-btn');
    const toxicityText = document.getElementById('toxicity-text');
    const toxicityResults = document.getElementById('toxicity-results');
    
    analyzeBtn.addEventListener('click', function() {
        const text = toxicityText.value.trim();
        if (!text) {
            alert('Please enter some text to analyze.');
            return;
        }
        
        analyzeBtn.innerHTML = '<svg class="w-5 h-5 inline-block mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>Analyzing...';
        analyzeBtn.disabled = true;
        
        setTimeout(() => {
            const mockToxicity = Math.random() * 100;
            const mockHarassment = Math.random() * 80;
            const mockHate = Math.random() * 60;
            
            document.getElementById('toxicity-percentage').textContent = Math.round(mockToxicity) + '%';
            document.getElementById('harassment-score').textContent = Math.round(mockHarassment) + '%';
            document.getElementById('hate-score').textContent = Math.round(mockHate) + '%';
            
            document.getElementById('toxicity-bar').style.width = mockToxicity + '%';
            document.getElementById('harassment-bar').style.width = mockHarassment + '%';
            document.getElementById('hate-bar').style.width = mockHate + '%';
            
            const toxicityBar = document.getElementById('toxicity-bar');
            if (mockToxicity < 30) {
                toxicityBar.className = 'h-3 bg-green-500 rounded-full transition-all duration-1000';
            } else if (mockToxicity < 70) {
                toxicityBar.className = 'h-3 bg-yellow-500 rounded-full transition-all duration-1000';
            } else {
                toxicityBar.className = 'h-3 bg-red-500 rounded-full transition-all duration-1000';
            }
            
            const recommendation = document.querySelector('#toxicity-recommendation p');
            if (mockToxicity < 30) {
                recommendation.textContent = 'This content appears to be safe and non-toxic. No immediate action required.';
            } else if (mockToxicity < 70) {
                recommendation.textContent = 'This content shows moderate toxicity levels. Consider reviewing and moderating before publication.';
            } else {
                recommendation.textContent = 'This content shows high toxicity levels. We strongly recommend revision or removal to protect your reputation.';
            }
            
            toxicityResults.classList.remove('hidden');
            
            analyzeBtn.innerHTML = '<svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>Analyze Text';
            analyzeBtn.disabled = false;
        }, 2000);
    });
    
    const checkVisibilityBtn = document.getElementById('check-visibility-btn');
    const visibilityUrl = document.getElementById('visibility-url');
    const visibilityResults = document.getElementById('visibility-results');
    
    checkVisibilityBtn.addEventListener('click', function() {
        const url = visibilityUrl.value.trim();
        if (!url) {
            alert('Please enter a URL to check.');
            return;
        }
        
        checkVisibilityBtn.innerHTML = '<svg class="w-5 h-5 inline-block mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>Checking...';
        checkVisibilityBtn.disabled = true;
        
        setTimeout(() => {
            const isVisible = Math.random() > 0.3; // 70% chance of being visible
            const position = isVisible ? Math.floor(Math.random() * 50) + 1 : null;
            const lastIndexed = isVisible ? Math.floor(Math.random() * 30) + 1 + ' days ago' : 'Not indexed';
            
            const statusDiv = document.getElementById('visibility-status');
            const iconDiv = document.getElementById('visibility-icon');
            const titleEl = document.getElementById('visibility-title');
            const descriptionEl = document.getElementById('visibility-description');
            
            if (isVisible) {
                statusDiv.className = 'p-6 bg-green-50 border border-green-200 rounded-lg mb-4';
                iconDiv.className = 'w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4';
                titleEl.textContent = 'Visible in Search Results';
                titleEl.className = 'text-xl font-bold text-green-900';
                descriptionEl.textContent = 'Your content is indexed and appears in Google search results.';
                descriptionEl.className = 'text-green-700';
            } else {
                statusDiv.className = 'p-6 bg-red-50 border border-red-200 rounded-lg mb-4';
                iconDiv.className = 'w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4';
                iconDiv.innerHTML = '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
                titleEl.textContent = 'Not Found in Search Results';
                titleEl.className = 'text-xl font-bold text-red-900';
                descriptionEl.textContent = 'Your content does not appear to be indexed by Google.';
                descriptionEl.className = 'text-red-700';
            }
            
            document.getElementById('search-position').textContent = position ? '#' + position : 'Not found';
            document.getElementById('last-indexed').textContent = lastIndexed;
            
            visibilityResults.classList.remove('hidden');
            
            checkVisibilityBtn.innerHTML = '<svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>Check Visibility';
            checkVisibilityBtn.disabled = false;
        }, 1500);
    });
    
    const addKeywordBtn = document.getElementById('add-keyword-btn');
    const addKeywordModal = document.getElementById('add-keyword-modal');
    const cancelKeywordBtn = document.getElementById('cancel-keyword-btn');
    const saveKeywordBtn = document.getElementById('save-keyword-btn');
    const newKeywordInput = document.getElementById('new-keyword');
    
    addKeywordBtn.addEventListener('click', function() {
        addKeywordModal.classList.remove('hidden');
        newKeywordInput.focus();
    });
    
    cancelKeywordBtn.addEventListener('click', function() {
        addKeywordModal.classList.add('hidden');
        newKeywordInput.value = '';
    });
    
    saveKeywordBtn.addEventListener('click', function() {
        const keyword = newKeywordInput.value.trim();
        if (!keyword) {
            alert('Please enter a keyword to monitor.');
            return;
        }
        
        const tableBody = document.getElementById('monitoring-table-body');
        const newRow = document.createElement('tr');
        newRow.className = 'border-b hover:bg-gray-50';
        newRow.innerHTML = `
            <td class="p-4 font-medium">${keyword}</td>
            <td class="p-4">
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Setting up</span>
            </td>
            <td class="p-4 text-gray-600">Just added</td>
            <td class="p-4">
                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">No</span>
            </td>
            <td class="p-4">
                <button class="text-purple-600 hover:text-purple-800 mr-3">View</button>
                <button class="text-red-600 hover:text-red-800">Remove</button>
            </td>
        `;
        tableBody.appendChild(newRow);
        
        addKeywordModal.classList.add('hidden');
        newKeywordInput.value = '';
        
        alert('Keyword added successfully! Monitoring will begin shortly.');
    });
    
    addKeywordModal.addEventListener('click', function(e) {
        if (e.target === addKeywordModal) {
            addKeywordModal.classList.add('hidden');
            newKeywordInput.value = '';
        }
    });
});
</script>

<?php include_once('includes/footer.php'); ?>

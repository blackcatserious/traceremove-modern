<?php
$pageTitle = "Page Not Found | TraceRemove";
$pageDescription = "The page you're looking for doesn't exist. Return to TraceRemove's homepage to explore our reputation management services.";
$pageKeywords = "404 error, page not found, TraceRemove, reputation management";
include_once('includes/header.php');
?>

<main>
    <!-- 404 Error Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 min-h-screen flex items-center">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center fade-in">
                <!-- Animated 404 -->
                <div class="mb-8">
                    <h1 class="text-8xl md:text-9xl font-bold text-white/20 mb-4 scale-in">404</h1>
                    <div class="relative">
                        <h2 class="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                    </div>
                </div>

                <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Oops! The page you're looking for seems to have vanished into the digital void. 
                    Don't worry, our reputation management experts are here to help you find what you need.
                </p>

                <!-- Search Suggestions -->
                <div class="grid md:grid-cols-3 gap-6 mb-12 stagger-in">
                    <div class="stagger-item bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0M8 5a2 2 0 012-2h4a2 2 0 012 2v0"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Our Services</h3>
                        <p class="text-blue-100 text-sm mb-4">Explore our comprehensive reputation management solutions</p>
                        <a href="/services" class="text-blue-300 hover:text-white transition-colors font-medium">View Services →</a>
                    </div>

                    <div class="stagger-item bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Success Stories</h3>
                        <p class="text-blue-100 text-sm mb-4">Read about our clients' reputation recovery journeys</p>
                        <a href="/cases" class="text-blue-300 hover:text-white transition-colors font-medium">View Cases →</a>
                    </div>

                    <div class="stagger-item bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Get Help</h3>
                        <p class="text-blue-100 text-sm mb-4">Contact our team for personalized assistance</p>
                        <a href="/contact" class="text-blue-300 hover:text-white transition-colors font-medium">Contact Us →</a>
                    </div>
                </div>

                <!-- Main CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a href="/" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors scale-in">
                        <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Return Home
                    </a>
                    <a href="/blog" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors scale-in">
                        <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                        </svg>
                        Browse Blog
                    </a>
                </div>

                <!-- Popular Pages -->
                <div class="text-center">
                    <h3 class="text-xl font-semibold mb-6">Popular Pages</h3>
                    <div class="flex flex-wrap justify-center gap-4">
                        <a href="/about" class="text-blue-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">About Us</a>
                        <a href="/testimonials" class="text-blue-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">Testimonials</a>
                        <a href="/blog/reputation-management-fundamentals.php" class="text-blue-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">Reputation Basics</a>
                        <a href="/blog/crisis-management-strategies.php" class="text-blue-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">Crisis Management</a>
                    </div>
                </div>

                <!-- Animated Elements -->
                <div class="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                <div class="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
                <div class="absolute bottom-20 left-20 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-50"></div>
                <div class="absolute bottom-40 right-10 w-5 h-5 bg-yellow-400 rounded-full animate-bounce opacity-30"></div>
            </div>
        </div>
    </section>

    <!-- Help Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Still Can't Find What You're Looking For?</h2>
                <p class="text-xl text-gray-600 mb-8">
                    Our team is here to help you navigate to the right solution for your reputation management needs.
                </p>
                
                <div class="grid md:grid-cols-2 gap-8 mt-12">
                    <div class="text-center p-8 bg-gray-50 rounded-2xl scale-in">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-4">Email Support</h3>
                        <p class="text-gray-600 mb-6">Get detailed answers to your questions via email</p>
                        <a href="mailto:support@traceremove.com" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Send Email
                        </a>
                    </div>
                    
                    <div class="text-center p-8 bg-gray-50 rounded-2xl scale-in">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-4">Live Chat</h3>
                        <p class="text-gray-600 mb-6">Chat with our team for immediate assistance</p>
                        <a href="/contact" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                            Start Chat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.fade-in {
    animation: fadeInUp 0.8s ease-out;
}

.scale-in {
    animation: scaleIn 0.6s ease-out;
}

.stagger-in .stagger-item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
}

.stagger-in .stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-in .stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-in .stagger-item:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>

<?php include_once('includes/footer.php'); ?>

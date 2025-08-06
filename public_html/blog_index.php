<?php
$page_title = "Blog - TraceRemove | Digital Privacy & Security Articles";
$page_description = "Expert insights on digital privacy, data protection, and online security. Learn how to protect your personal information and maintain anonymity online.";
$page_keywords = "digital privacy, data protection, online security, anonymity, trace removal, privacy tools";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <meta name="description" content="<?php echo $page_description; ?>">
    <meta name="keywords" content="<?php echo $page_keywords; ?>">
    <meta name="robots" content="index, follow">
    <meta name="author" content="TraceRemove">
    
    <meta property="og:title" content="<?php echo $page_title; ?>">
    <meta property="og:description" content="<?php echo $page_description; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://traceremove.com/blog/">
    <meta property="og:image" content="https://traceremove.com/assets/images/logo.svg">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo $page_title; ?>">
    <meta name="twitter:description" content="<?php echo $page_description; ?>">
    <meta name="twitter:image" content="https://traceremove.com/assets/images/logo.svg">
    
    <link rel="canonical" href="https://traceremove.com/blog/">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="/assets/css/main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body class="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white">
    <?php include '../includes/header.php'; ?>
    
    <main class="pt-20">
        <section class="py-16 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16" data-aos="fade-up">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        Privacy & Security Blog
                    </h1>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Expert insights, tips, and guides on digital privacy, data protection, and online security. 
                        Stay informed about the latest threats and learn how to protect yourself online.
                    </p>
                </div>

                <div class="flex flex-wrap gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <button class="category-filter active px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300" data-category="all">
                        All Articles
                    </button>
                    <button class="category-filter px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300" data-category="privacy">
                        Privacy
                    </button>
                    <button class="category-filter px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300" data-category="security">
                        Security
                    </button>
                    <button class="category-filter px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300" data-category="tools">
                        Tools & Guides
                    </button>
                    <button class="category-filter px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300" data-category="news">
                        News
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <?php
                    $articles = [
                        [
                            'title' => 'Complete Guide to Digital Privacy in 2024',
                            'excerpt' => 'Learn essential strategies to protect your personal data and maintain privacy in an increasingly connected world.',
                            'category' => 'privacy',
                            'date' => '2024-01-15',
                            'image' => '/assets/images/blog/digital-privacy-guide.jpg',
                            'slug' => 'complete-guide-digital-privacy-2024',
                            'read_time' => '8 min read'
                        ],
                        [
                            'title' => 'How to Remove Your Personal Data from Data Brokers',
                            'excerpt' => 'Step-by-step instructions to remove your information from major data broker websites and protect your privacy.',
                            'category' => 'tools',
                            'date' => '2024-01-12',
                            'image' => '/assets/images/blog/data-broker-removal.jpg',
                            'slug' => 'remove-personal-data-brokers',
                            'read_time' => '12 min read'
                        ],
                        [
                            'title' => 'VPN vs Tor: Which is Better for Privacy?',
                            'excerpt' => 'Compare VPN and Tor networks to understand which privacy tool is best for your specific needs and threat model.',
                            'category' => 'security',
                            'date' => '2024-01-10',
                            'image' => '/assets/images/blog/vpn-vs-tor.jpg',
                            'slug' => 'vpn-vs-tor-privacy-comparison',
                            'read_time' => '6 min read'
                        ],
                        [
                            'title' => 'Secure Messaging Apps: Signal vs WhatsApp vs Telegram',
                            'excerpt' => 'Detailed comparison of popular messaging apps and their security features to help you choose the most secure option.',
                            'category' => 'security',
                            'date' => '2024-01-08',
                            'image' => '/assets/images/blog/secure-messaging.jpg',
                            'slug' => 'secure-messaging-apps-comparison',
                            'read_time' => '10 min read'
                        ],
                        [
                            'title' => 'Browser Privacy Settings: Chrome, Firefox, Safari',
                            'excerpt' => 'Optimize your browser settings for maximum privacy and security across all major web browsers.',
                            'category' => 'tools',
                            'date' => '2024-01-05',
                            'image' => '/assets/images/blog/browser-privacy.jpg',
                            'slug' => 'browser-privacy-settings-guide',
                            'read_time' => '7 min read'
                        ],
                        [
                            'title' => 'Data Breach Alert: What to Do When Your Data is Compromised',
                            'excerpt' => 'Essential steps to take immediately after a data breach to minimize damage and protect your accounts.',
                            'category' => 'news',
                            'date' => '2024-01-03',
                            'image' => '/assets/images/blog/data-breach-response.jpg',
                            'slug' => 'data-breach-response-guide',
                            'read_time' => '5 min read'
                        ]
                    ];

                    foreach ($articles as $index => $article) {
                        $delay = ($index % 3) * 100 + 300;
                        echo '<article class="blog-card bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20" data-aos="fade-up" data-aos-delay="' . $delay . '" data-category="' . $article['category'] . '">';
                        echo '<div class="aspect-video bg-gradient-to-br from-red-500 to-purple-600 relative overflow-hidden">';
                        echo '<div class="absolute inset-0 bg-black/20"></div>';
                        echo '<div class="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">' . ucfirst($article['category']) . '</div>';
                        echo '<div class="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">' . $article['read_time'] . '</div>';
                        echo '</div>';
                        echo '<div class="p-6">';
                        echo '<div class="flex items-center text-gray-400 text-sm mb-3">';
                        echo '<span>' . date('M j, Y', strtotime($article['date'])) . '</span>';
                        echo '</div>';
                        echo '<h3 class="text-xl font-bold mb-3 text-white hover:text-red-400 transition-colors duration-300">';
                        echo '<a href="/blog/' . $article['slug'] . '">' . $article['title'] . '</a>';
                        echo '</h3>';
                        echo '<p class="text-gray-300 mb-4 line-clamp-3">' . $article['excerpt'] . '</p>';
                        echo '<a href="/blog/' . $article['slug'] . '" class="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors duration-300">';
                        echo 'Read More';
                        echo '<svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">';
                        echo '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>';
                        echo '</svg>';
                        echo '</a>';
                        echo '</div>';
                        echo '</article>';
                    }
                    ?>
                </div>

                <div class="text-center mb-16" data-aos="fade-up">
                    <button class="load-more-btn px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:transform hover:scale-105">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>

        <section class="py-16 px-4 bg-gray-900/50">
            <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Stay Updated
                </h2>
                <p class="text-xl text-gray-300 mb-8">
                    Get the latest privacy and security insights delivered to your inbox. No spam, unsubscribe anytime.
                </p>
                <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" id="newsletter-form">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        class="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                        required
                    >
                    <button 
                        type="submit" 
                        class="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:transform hover:scale-105"
                    >
                        Subscribe
                    </button>
                </form>
                <p class="text-gray-400 text-sm mt-4">
                    Join 10,000+ privacy-conscious individuals who trust our insights.
                </p>
            </div>
        </section>
    </main>

    <?php include '../includes/footer.php'; ?>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true
            });

            const categoryFilters = document.querySelectorAll('.category-filter');
            const blogCards = document.querySelectorAll('.blog-card');

            categoryFilters.forEach(filter => {
                filter.addEventListener('click', function() {
                    const category = this.dataset.category;
                    
                    categoryFilters.forEach(f => {
                        f.classList.remove('active', 'bg-red-600', 'text-white');
                        f.classList.add('bg-gray-800', 'text-gray-300');
                    });
                    
                    this.classList.add('active', 'bg-red-600', 'text-white');
                    this.classList.remove('bg-gray-800', 'text-gray-300');
                    
                    blogCards.forEach(card => {
                        if (category === 'all' || card.dataset.category === category) {
                            card.style.display = 'block';
                            card.classList.add('fade-in');
                        } else {
                            card.style.display = 'none';
                            card.classList.remove('fade-in');
                        }
                    });
                });
            });

            const newsletterForm = document.getElementById('newsletter-form');
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                
                fetch('/api/newsletter-subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Thank you for subscribing! Check your email for confirmation.');
                        this.reset();
                    } else {
                        alert('Subscription failed. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Subscription failed. Please try again.');
                });
            });

            const loadMoreBtn = document.querySelector('.load-more-btn');
            loadMoreBtn.addEventListener('click', function() {
                this.innerHTML = '<span class="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>Loading...';
                
                setTimeout(() => {
                    this.innerHTML = 'Load More Articles';
                    alert('More articles coming soon!');
                }, 1500);
            });
        });
    </script>
</body>
</html>

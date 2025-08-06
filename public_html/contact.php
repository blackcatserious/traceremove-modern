<?php
$pageTitle = "Contact Us | TraceRemove - Get Expert Reputation Management Help";
$pageDescription = "Contact TraceRemove for professional reputation management services. Get a free consultation and protect your digital reputation with our AI-powered solutions.";
$pageKeywords = "contact TraceRemove, reputation management consultation, digital protection services, online reputation help";

$formSubmitted = false;
$formSuccess = false;
$formError = '';

if ($_POST && isset($_POST['action']) && $_POST['action'] === 'submit_contact') {
    $formSubmitted = true;
    
    $firstName = trim($_POST['firstName'] ?? '');
    $lastName = trim($_POST['lastName'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $company = trim($_POST['company'] ?? '');
    $service = trim($_POST['service'] ?? '');
    $privacy = isset($_POST['privacy']);
    
    if (empty($firstName)) {
        $formError = 'First name is required.';
    } elseif (empty($lastName)) {
        $formError = 'Last name is required.';
    } elseif (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $formError = 'Valid email address is required.';
    } elseif (empty($message)) {
        $formError = 'Message is required.';
    } elseif (!$privacy) {
        $formError = 'You must agree to the privacy policy.';
    } else {
        $telegramSuccess = sendToTelegram($firstName, $lastName, $email, $phone, $company, $service, $message);
        
        if ($telegramSuccess) {
            $formSuccess = true;
        } else {
            $formError = 'There was an error sending your message. Please try again or contact us directly.';
        }
    }
}

function sendToTelegram($firstName, $lastName, $email, $phone, $company, $service, $message) {
    $botToken = getenv('TELEGRAM_BOT_TOKEN') ?: 'YOUR_BOT_TOKEN_HERE'; // Replace with actual token
    $chatId = '@Seriousblackcatbot'; // Bot username as specified
    
    $telegramMessage = "🔔 *New Contact Form Submission*\n\n";
    $telegramMessage .= "👤 *Name:* {$firstName} {$lastName}\n";
    $telegramMessage .= "📧 *Email:* {$email}\n";
    
    if (!empty($phone)) {
        $telegramMessage .= "📱 *Phone:* {$phone}\n";
    }
    
    if (!empty($company)) {
        $telegramMessage .= "🏢 *Company:* {$company}\n";
    }
    
    if (!empty($service)) {
        $telegramMessage .= "🛠️ *Service:* {$service}\n";
    }
    
    $telegramMessage .= "\n💬 *Message:*\n{$message}\n\n";
    $telegramMessage .= "⏰ *Submitted:* " . date('Y-m-d H:i:s T');
    
    $data = [
        'chat_id' => $chatId,
        'text' => $telegramMessage,
        'parse_mode' => 'Markdown'
    ];
    
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200 && $response) {
        $responseData = json_decode($response, true);
        return isset($responseData['ok']) && $responseData['ok'] === true;
    }
    
    return true;
}

include_once('includes/header.php');
?>

<main>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center fade-in">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Get Expert Help Today</h1>
                <p class="text-xl text-blue-100 mb-8">
                    Ready to protect your reputation? Our experts are here to help you navigate any digital reputation challenge.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white p-8 rounded-xl shadow-lg scale-in">
                    <h2 class="text-3xl font-bold mb-6">Send Us a Message</h2>
                    <p class="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                    
                    <?php if ($formSubmitted && $formSuccess): ?>
                        <!-- Success Message -->
                        <div class="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-green-900 mb-4">Message Sent Successfully!</h3>
                            <p class="text-green-700 mb-6">
                                Thank you for contacting TraceRemove. We've received your message and will respond within 24 hours. 
                                For urgent matters, please call our emergency line.
                            </p>
                            <button onclick="location.reload()" class="btn-premium btn-premium-glow">
                                Send Another Message
                            </button>
                        </div>
                    <?php elseif ($formSubmitted && !empty($formError)): ?>
                        <!-- Error Message -->
                        <div class="bg-red-50 border border-red-200 rounded-xl p-8 text-center mb-8">
                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-red-900 mb-4">Error Sending Message</h3>
                            <p class="text-red-700 mb-6"><?php echo htmlspecialchars($formError); ?></p>
                        </div>
                    <?php endif; ?>

                    <?php if (!$formSubmitted || !$formSuccess): ?>
                    <form method="POST" class="contact-form space-y-6" id="contact-form">
                        <input type="hidden" name="action" value="submit_contact">
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <input type="text" id="firstName" name="firstName" required 
                                       value="<?php echo htmlspecialchars($_POST['firstName'] ?? ''); ?>"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div>
                                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" required 
                                       value="<?php echo htmlspecialchars($_POST['lastName'] ?? ''); ?>"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required 
                                   value="<?php echo htmlspecialchars($_POST['email'] ?? ''); ?>"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" 
                                   value="<?php echo htmlspecialchars($_POST['phone'] ?? ''); ?>"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        
                        <div>
                            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                            <input type="text" id="company" name="company" 
                                   value="<?php echo htmlspecialchars($_POST['company'] ?? ''); ?>"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        
                        <div>
                            <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                            <select id="service" name="service" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select a service</option>
                                <option value="reputation-management" <?php echo ($_POST['service'] ?? '') === 'reputation-management' ? 'selected' : ''; ?>>Online Reputation Management</option>
                                <option value="content-removal" <?php echo ($_POST['service'] ?? '') === 'content-removal' ? 'selected' : ''; ?>>Content Removal</option>
                                <option value="brand-monitoring" <?php echo ($_POST['service'] ?? '') === 'brand-monitoring' ? 'selected' : ''; ?>>Brand Monitoring</option>
                                <option value="crisis-management" <?php echo ($_POST['service'] ?? '') === 'crisis-management' ? 'selected' : ''; ?>>Crisis Management</option>
                                <option value="legal-support" <?php echo ($_POST['service'] ?? '') === 'legal-support' ? 'selected' : ''; ?>>Legal Support</option>
                                <option value="consultation" <?php echo ($_POST['service'] ?? '') === 'consultation' ? 'selected' : ''; ?>>Free Consultation</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea id="message" name="message" rows="6" required placeholder="Please describe your situation and how we can help..." 
                                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><?php echo htmlspecialchars($_POST['message'] ?? ''); ?></textarea>
                        </div>
                        
                        <div class="flex items-start">
                            <input type="checkbox" id="privacy" name="privacy" required 
                                   <?php echo isset($_POST['privacy']) ? 'checked' : ''; ?>
                                   class="mt-1 mr-3">
                            <label for="privacy" class="text-sm text-gray-600">
                                I agree to the <a href="/privacy" class="text-blue-600 hover:text-blue-800">Privacy Policy</a> and consent to being contacted about my inquiry. *
                            </label>
                        </div>
                        
                        <button type="submit" id="submit-btn" class="w-full btn-premium">
                            <span id="submit-text">Send Message</span>
                            <span id="submit-loading" class="hidden">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        </button>
                    </form>
                    <?php endif; ?>
                </div>
                
                <!-- Contact Information -->
                <div class="space-y-8 fade-in">
                    <!-- Contact Details -->
                    <div class="bg-white p-8 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-6">Get in Touch</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold mb-1">Email</h4>
                                    <p class="text-gray-600">info@traceremove.com</p>
                                    <p class="text-gray-600">support@traceremove.com</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold mb-1">Phone</h4>
                                    <p class="text-gray-600">+1-800-TRACE-RM</p>
                                    <p class="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold mb-1">Office</h4>
                                    <p class="text-gray-600">Global operations</p>
                                    <p class="text-gray-600 text-sm">Remote consultations available worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Instant Messaging -->
                    <div class="bg-white p-8 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-6">Instant Messaging</h3>
                        
                        <div class="space-y-4">
                            <a href="https://wa.me/1234567890" class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="/assets/images/whatsapp-icon.svg" alt="WhatsApp" class="h-8 w-8">
                                <div>
                                    <h4 class="font-semibold">WhatsApp</h4>
                                    <p class="text-gray-600 text-sm">Quick responses, secure messaging</p>
                                </div>
                            </a>
                            
                            <a href="https://t.me/traceremove" class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="/assets/images/telegram-icon.svg" alt="Telegram" class="h-8 w-8">
                                <div>
                                    <h4 class="font-semibold">Telegram</h4>
                                    <p class="text-gray-600 text-sm">Encrypted communication</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Emergency Contact -->
                    <div class="bg-red-50 border border-red-200 p-6 rounded-xl">
                        <div class="flex items-start space-x-3">
                            <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                            </svg>
                            <div>
                                <h4 class="text-lg font-semibold text-red-800 mb-2">Reputation Crisis?</h4>
                                <p class="text-red-700 text-sm mb-3">If you're facing an urgent reputation crisis, contact us immediately for emergency response.</p>
                                <a href="tel:+1-800-TRACE-RM" class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                                    Call Emergency Line
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p class="text-xl text-gray-600">Quick answers to common questions</p>
                </div>
                
                <div class="space-y-6 stagger-in">
                    <div class="bg-gray-50 p-6 rounded-xl stagger-item">
                        <h3 class="text-lg font-semibold mb-3">How quickly can you respond to a reputation crisis?</h3>
                        <p class="text-gray-600">We offer 24/7 emergency response for reputation crises. Our team can begin immediate action within 1-2 hours of your initial contact.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-xl stagger-item">
                        <h3 class="text-lg font-semibold mb-3">Do you offer free consultations?</h3>
                        <p class="text-gray-600">Yes, we provide free initial consultations to assess your situation and recommend the best course of action. This includes a preliminary reputation audit.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-xl stagger-item">
                        <h3 class="text-lg font-semibold mb-3">Is all communication confidential?</h3>
                        <p class="text-gray-600">Absolutely. All client communications and case details are protected by strict confidentiality agreements. We never disclose client information or case details.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-xl stagger-item">
                        <h3 class="text-lg font-semibold mb-3">What information should I include in my message?</h3>
                        <p class="text-gray-600">Please describe your situation in detail, including any specific content or platforms involved, timeline of events, and your primary concerns. The more information you provide, the better we can help.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include_once('includes/footer.php'); ?>

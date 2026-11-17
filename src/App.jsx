import React, { useState } from 'react';
import './App.css';
import logo from './assets/weblogo.jpeg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [activePage, setActivePage] = useState('home'); 
  const featuresList = [
    {
      id: 'syllabus',
      category: 'materials',
      title: 'Syllabus-Based Study Materials',
      desc: 'Access relevant learning resources organised according to the prescribed syllabus of your selected examination.',
      tag: 'Learning'
    },
    {
      id: 'tests',
      category: 'practice',
      title: 'Daily Practice Tests',
      desc: 'Strengthen your preparation through regular tests designed around the respective examination pattern.',
      tag: 'Practice'
    },
    {
      id: 'analysis',
      category: 'performance',
      title: 'Subject-Wise Performance Analysis',
      desc: 'Understand your performance across individual subjects and identify areas that need improvement.',
      tag: 'Analytics'
    },
    {
      id: 'reports',
      category: 'performance',
      title: 'Personalised Performance Reports',
      desc: 'Track your progress through meaningful reports that help you plan your next steps effectively.',
      tag: 'Insights'
    }
  ];

  const filteredFeatures = activeTab === 'all' 
    ? featuresList 
    : featuresList.filter(f => f.category === activeTab);

  return (
    <div className="vaagai-app">
      
   
      <div className="bg-watermark-container">
        <img src={logo} alt="Watermark Logo" className="bg-watermark-logo animate-pulse-slow" />
      </div>

  
      <header className="vaagai-header">
        <div className="vaagai-container nav-container">
          <div className="logo-box" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={logo} 
              alt="Vaagai Study Logo" 
              className="logo-img" 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div>
              <span className="logo-title">VAAGAI STUDY</span>
              <span className="logo-sub">Think • Learn • Practice • Achieve</span>
            </div>
          </div>

          <nav className="desktop-nav">
            <a href="#home" onClick={() => setActivePage('home')}>Home</a>
            <a href="#journey" onClick={() => setActivePage('home')}>Journey</a>
            <a href="#about" onClick={() => setActivePage('home')}>About</a>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-dropdown animate-fade-in">
            <a href="#home" onClick={() => { setMobileMenuOpen(false); setActivePage('home'); }}>Home</a>
            <a href="#journey" onClick={() => { setMobileMenuOpen(false); setActivePage('home'); }}>Journey</a>
            <a href="#about" onClick={() => { setMobileMenuOpen(false); setActivePage('home'); }}>About</a>
          </div>
        )}
      </header>

   
      {activePage === 'disclaimer' ? (
        <div className="disclaimer-page vaagai-container animate-fade-in">
          <div className="disclaimer-card">
            <h2>DISCLAIMER</h2>
            <p className="effective-date"><strong>Effective Date:</strong> November 1, 2026 | <strong>Last Updated:</strong> November 1, 2026</p>
            <p className="platform-owner"><strong>Vaagai Study</strong> – www.vaagaistudy.com<br/>Owned and Operated by Naavic Edutech Private Limited</p>

            <div className="disclaimer-section">
              <h3>1. General Information</h3>
              <p>Vaagai Study is an online educational and examination preparation platform owned and operated by Naavic Edutech Private Limited.</p>
              <p>The Platform provides syllabus-based study materials, daily practice tests, mock examinations, subject-wise assessments, performance analysis and other educational resources to support learners preparing for competitive examinations, career opportunities and higher-education entrance examinations.</p>
              <p>All information and services available through Vaagai Study are provided for general educational and informational purposes.</p>
            </div>

            <div className="disclaimer-section">
              <h3>2. No Official Affiliation</h3>
              <p>Vaagai Study is an independent educational platform.</p>
              <p>Unless expressly stated otherwise, Naavic Edutech Private Limited and Vaagai Study are not affiliated with, endorsed by, sponsored by or officially associated with:</p>
              <ul>
                <li>Tamil Nadu Public Service Commission (TNPSC).</li>
                <li>National Testing Agency (NTA).</li>
                <li>National Eligibility cum Entrance Test (NEET) authorities.</li>
                <li>Government departments or recruitment agencies.</li>
                <li>Universities, educational boards or other examination-conducting authorities.</li>
              </ul>
              <p>All examination names, trademarks, logos and references belong to their respective owners and are used only for identification and educational reference purposes, where permitted.</p>
              <p>Users should always refer to the official websites and notifications of the relevant examination authorities for authoritative information.</p>
            </div>

            <div className="disclaimer-section">
              <h3>3. Educational Content and Accuracy</h3>
              <p><strong>3.1.</strong> Vaagai Study makes reasonable efforts to prepare and provide relevant, accurate and useful educational materials based on the applicable examination syllabuses and publicly available information.</p>
              <p><strong>3.2.</strong> Although we take care in preparing and reviewing our study materials, we do not guarantee that all information will always be complete, error-free or updated immediately following every syllabus or examination pattern change.</p>
              <p><strong>3.3.</strong> Examination syllabuses, eligibility conditions, application procedures, examination schedules and question patterns may change from time to time.</p>
              <p><strong>3.4.</strong> Users are responsible for verifying important examination-related information through official notifications, government publications and authorised examination websites.</p>
              <p><strong>3.5.</strong> Study materials and practice questions available on Vaagai Study should be treated as supplementary learning resources and not as a substitute for official examination materials or prescribed textbooks.</p>
            </div>

            <div className="disclaimer-section">
              <h3>4. Practice Tests and Mock Examinations</h3>
              <p><strong>4.1.</strong> Daily tests, practice questions and mock examinations offered through Vaagai Study are designed to help learners improve their subject knowledge, preparation level and examination readiness.</p>
              <p><strong>4.2.</strong> These assessments may be structured with reference to the relevant examination pattern, syllabus, subject coverage and publicly available examination information.</p>
              <p><strong>4.3.</strong> Questions provided through the Platform are practice materials and are not necessarily actual questions from upcoming or previous official examinations unless specifically identified and lawfully reproduced as such.</p>
              <p><strong>4.4.</strong> Participation in practice tests or mock examinations does not guarantee that similar questions will appear in an actual examination.</p>
              <p><strong>4.5.</strong> Test scores and rankings are indicative measures of performance within the Platform and should not be considered equivalent to official examination results.</p>
            </div>

            <div className="disclaimer-section">
              <h3>5. Performance Analysis and Reports</h3>
              <p><strong>5.1.</strong> Vaagai Study may provide subject-wise, topic-wise and overall performance reports based on users' test attempts, answers and learning activities.</p>
              <p><strong>5.2.</strong> These reports are intended to help learners identify strengths, understand areas requiring improvement and plan their preparation more effectively.</p>
              <p><strong>5.3.</strong> Performance analysis and recommendations are generated using available assessment data and may not reflect a learner's complete knowledge, abilities or actual examination readiness.</p>
              <p><strong>5.4.</strong> The Company does not guarantee any particular score, rank, admission, selection or examination outcome based on the use of these reports or recommendations.</p>
            </div>

            <div className="disclaimer-section">
              <h3>6. No Guarantee of Examination Success</h3>
              <p>Vaagai Study is an educational support platform designed to assist learners in their examination preparation.</p>
              <p>Success in competitive examinations and higher-education entrance examinations depends on several factors, including individual effort, subject knowledge, consistency, examination conditions, competition, eligibility and decisions made by the relevant authorities.</p>
              <p>Naavic Edutech Private Limited does not guarantee:</p>
              <ul>
                <li>Qualification in any competitive examination.</li>
                <li>Admission to any educational institution.</li>
                <li>Selection for any government or private employment.</li>
                <li>Achievement of a specific examination score or rank.</li>
                <li>Success within a particular preparation period.</li>
              </ul>
              <p>The responsibility for preparation, examination applications, eligibility verification and participation in official examinations rests with the individual learner.</p>
            </div>

            <div className="disclaimer-section">
              <h3>7. Subscription Packages and Services</h3>
              <p><strong>7.1.</strong> Vaagai Study may provide different subscription packages with varying content, features, assessment facilities and validity periods.</p>
              <p><strong>7.2.</strong> The features and benefits available to a user depend on the package selected and successfully purchased.</p>
              <p><strong>7.3.</strong> The Company reserves the right to improve, modify or update learning content, test structures, reports and Platform features.</p>
              <p><strong>7.4.</strong> Subscription access is governed by the applicable Terms & Conditions and Cancellation & Refund Policy.</p>
              <p><strong>7.5.</strong> Users are encouraged to review the package details carefully before making a purchase.</p>
            </div>

            <div className="disclaimer-section">
              <h3>8. Technical Availability</h3>
              <p><strong>8.1.</strong> The Company makes reasonable efforts to maintain the availability and proper functioning of the Vaagai Study website and mobile application.</p>
              <p><strong>8.2.</strong> However, temporary interruptions may occur due to maintenance, software updates, internet connectivity issues, server failures, cybersecurity incidents or third-party service disruptions.</p>
              <p><strong>8.3.</strong> The Company does not guarantee uninterrupted, error-free or continuous availability of the Platform.</p>
              <p><strong>8.4.</strong> Users are responsible for maintaining compatible devices, software and internet connectivity required to access the services.</p>
            </div>

            <div className="disclaimer-section">
              <h3>9. Third-Party Websites and External Resources</h3>
              <p>Vaagai Study may contain links to third-party websites, official examination portals, educational resources or other external services.</p>
              <p>These links are provided for user convenience and informational purposes.</p>
              <p>The Company does not control or independently guarantee the accuracy, availability, security or privacy practices of external websites. Users should review the relevant third-party terms and policies before using those services.</p>
            </div>

            <div className="disclaimer-section">
              <h3>10. Intellectual Property</h3>
              <p>Unless otherwise stated, the original content, study materials, question banks, explanations, graphics, logos, software, reports and other materials available on Vaagai Study are owned by or licensed to Naavic Edutech Private Limited.</p>
              <p>Unauthorised copying, reproduction, distribution, modification, commercial use or redistribution of Platform content is prohibited without prior written permission from the relevant rights holder.</p>
              <p>All third-party trademarks, examination names and other intellectual property remain the property of their respective owners.</p>
            </div>

            <div className="disclaimer-section">
              <h3>11. Limitation of Responsibility</h3>
              <p>To the extent permitted by applicable law, Naavic Edutech Private Limited shall not be responsible for losses arising from:</p>
              <ul>
                <li>Reliance on educational information without independent verification.</li>
                <li>Changes to official examination syllabuses, schedules or eligibility requirements.</li>
                <li>Differences between Platform practice tests and actual examination questions.</li>
                <li>Decisions made by examination authorities, universities or recruitment agencies.</li>
                <li>Temporary technical interruptions or third-party service failures.</li>
                <li>A learner's individual examination performance or preparation outcomes.</li>
              </ul>
              <p>Nothing in this Disclaimer excludes or limits any liability or consumer right that cannot legally be excluded or limited under applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>12. Privacy and Personal Information</h3>
              <p>The collection, use, storage and processing of personal information through Vaagai Study are governed by the Platform's Privacy Policy.</p>
              <p>Users are encouraged to read the Privacy Policy to understand how their registration details, subscription information, test responses and performance data are handled.</p>
            </div>

            <div className="disclaimer-section">
              <h3>13. Changes to This Disclaimer</h3>
              <p>Naavic Edutech Private Limited may update or revise this Disclaimer from time to time to reflect changes in the Platform, educational services, business practices or applicable laws.</p>
              <p>Any revised version will be published on the website with an updated "Last Updated" date.</p>
              <p>Users are encouraged to review this page periodically.</p>
            </div>

            <div className="disclaimer-section">
              <h3>14. Contact Information</h3>
              <p>For questions or concerns relating to this Disclaimer or the services provided through Vaagai Study, please contact:</p>
              <div className="contact-box-info">
                <p><strong>Company:</strong> Naavic Edutech Private Limited</p>
                <p><strong>Platform:</strong> Vaagai Study</p>
                <p><strong>Website:</strong> <a href="https://vaagaistudy.com" target="_blank" rel="noreferrer">https://vaagaistudy.com</a></p>
                <p><strong>Grievance Officer:</strong> Mr. K Ragu</p>
                <p><strong>Designation:</strong> CEO</p>
                <p><strong>Email:</strong> naavicedutech@gmail.com</p>
                <p><strong>Registered Office Address:</strong> 135/1A, KKP Street, AS Pet, Namakkal, Tamilnadu - 637001</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="btn-primary">← Back to Home</button>
            </div>
          </div>
        </div>
      ) : activePage === 'refund' ? (
        <div className="disclaimer-page vaagai-container animate-fade-in">
          <div className="disclaimer-card">
            <h2>CANCELLATION & REFUND POLICY</h2>
            <p className="effective-date"><strong>Effective Date:</strong> November 1, 2026 | <strong>Last Updated:</strong> November 1, 2026</p>
            <p className="platform-owner"><strong>Vaagai Study</strong> – www.vaagaistudy.com<br/>Owned and Operated by Naavic Edutech Private Limited</p>

            <div className="disclaimer-section">
              <h3>1. Introduction</h3>
              <p>Welcome to Vaagai Study.</p>
              <p>Vaagai Study is an online educational and examination preparation platform owned and operated by Naavic Edutech Private Limited ("Company", "we", "our" or "us").</p>
              <p>This Cancellation & Refund Policy explains the conditions under which users may request cancellation of subscription packages and refunds for payments made through the Vaagai Study website or mobile application.</p>
              <p>By purchasing a subscription package through Vaagai Study, users agree to this policy, subject to their statutory rights under applicable Indian laws.</p>
            </div>

            <div className="disclaimer-section">
              <h3>2. Subscription Packages</h3>
              <p>Vaagai Study may offer different subscription packages for competitive examinations, career-oriented examinations and higher-education entrance examinations.</p>
              <p>Depending on the selected package, subscription benefits may include:</p>
              <ul>
                <li>Examination-specific study materials.</li>
                <li>Syllabus-based learning resources.</li>
                <li>Daily practice tests and mock examinations.</li>
                <li>Subject-wise assessments.</li>
                <li>Performance analysis and progress reports.</li>
                <li>Other educational features specified in the selected package.</li>
              </ul>
              <p>Each package will display its applicable price, validity period, features and access conditions before purchase.</p>
              <p>Users are advised to review the package details carefully before completing a transaction.</p>
            </div>

            <div className="disclaimer-section">
              <h3>3. Subscription Cancellation</h3>
              <p><strong>3.1.</strong> Users may request cancellation of their subscription by contacting the Vaagai Study support team through the official communication channels provided on the Platform.</p>
              <p><strong>3.2.</strong> Cancellation of a subscription will generally prevent further use of the purchased services after the applicable subscription period expires or after cancellation takes effect, depending on the nature of the package and the circumstances.</p>
              <p><strong>3.3.</strong> Unless expressly stated otherwise, cancelling a subscription does not automatically entitle the user to a refund.</p>
              <p><strong>3.4.</strong> Users should submit cancellation requests with their registered mobile number or email address and relevant transaction details to help us verify the request.</p>
              <p><strong>3.5.</strong> Where a subscription has a fixed validity period and has already been activated, requests for cancellation will be assessed in accordance with the refund conditions below and applicable law.</p>
              <p><strong>3.6.</strong> Unless expressly disclosed and separately authorised by the user, subscriptions will not automatically renew. Users must purchase a new package to continue access after expiry.</p>
            </div>

            <div className="disclaimer-section">
              <h3>4. Refund Eligibility</h3>
              <p>Vaagai Study aims to provide reliable educational services. However, refunds may be considered in the following circumstances, subject to verification and applicable law.</p>
              <p><strong>4.1 Duplicate Payments:</strong> If a user is charged more than once for the same subscription purchase due to a technical or payment-processing issue, the duplicate amount may be refunded after verification.</p>
              <p><strong>4.2 Successful Payment but Subscription Not Activated:</strong> If payment is successfully completed but the purchased subscription is not activated due to a verified technical issue, the Company will make reasonable efforts to activate the package. If the issue cannot be resolved within a reasonable period, the user may be eligible for a refund.</p>
              <p><strong>4.3 Unauthorised Transactions:</strong> If a user reports an unauthorised transaction, the Company will investigate the complaint in coordination with the relevant payment gateway or financial institution. Any refund or corrective action will be determined based on the investigation and applicable law.</p>
              <p><strong>4.4 Material Failure to Provide Purchased Services:</strong> If a purchased subscription or a material part of the promised service cannot be provided due to circumstances attributable to the Company, the user may be eligible for an appropriate refund or alternative remedy.</p>
              <p><strong>4.5 Incorrect Package or Payment Processing:</strong> If a user is charged for a package different from the one selected due to a verified technical or processing error, the Company will investigate and provide an appropriate resolution.</p>
            </div>

            <div className="disclaimer-section">
              <h3>5. Non-Refundable Circumstances</h3>
              <p>Subject to applicable consumer rights and legal requirements, refunds will generally not be available in the following situations:</p>
              <ul>
                <li>The user changes their mind after purchasing a correctly described subscription.</li>
                <li>The user does not use the purchased subscription or access the available study materials.</li>
                <li>The user does not attempt the daily tests or other available assessments.</li>
                <li>The user does not achieve the expected marks, rank, admission or examination result.</li>
                <li>The user selects an incorrect examination category or package despite the package details being clearly displayed before purchase.</li>
                <li>The subscription expires after the specified validity period.</li>
                <li>The user loses access due to a violation of the Terms & Conditions.</li>
                <li>The user experiences problems caused by their own device, internet connection or unsupported software, where the purchased service itself remains available.</li>
              </ul>
              <p>These conditions do not exclude refunds or other remedies required under applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>6. Technical Issues and Service Availability</h3>
              <p><strong>6.1.</strong> The Company makes reasonable efforts to maintain uninterrupted access to Vaagai Study.</p>
              <p><strong>6.2.</strong> Temporary service interruptions may occur due to server maintenance, network problems, technical failures, software updates or third-party service disruptions.</p>
              <p><strong>6.3.</strong> Users experiencing access or subscription-related technical issues should contact the support team with relevant details.</p>
              <p><strong>6.4.</strong> The Company will investigate verified issues and make reasonable efforts to restore access or provide an appropriate remedy.</p>
              <p><strong>6.5.</strong> If a material failure in providing a purchased service cannot be resolved, the Company will consider an appropriate refund or other remedy in accordance with applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>7. Refund Request Procedure</h3>
              <p>Users requesting a refund should contact the Vaagai Study support team using the official email address or support channel provided on the Platform.</p>
              <p>The request should include:</p>
              <ul>
                <li>Full name of the registered user.</li>
                <li>Registered mobile number or email address.</li>
                <li>Subscription package purchased.</li>
                <li>Payment date.</li>
                <li>Transaction reference or payment ID.</li>
                <li>Reason for requesting the refund.</li>
                <li>Supporting payment confirmation or screenshots, where relevant.</li>
              </ul>
              <p>The Company may request additional information reasonably necessary to verify the transaction and assess the request.</p>
            </div>

            <div className="disclaimer-section">
              <h3>8. Refund Review and Approval</h3>
              <p><strong>8.1.</strong> All refund requests will be reviewed individually.</p>
              <p><strong>8.2.</strong> The Company may verify the payment details, subscription activation status, service usage and nature of the complaint before making a decision.</p>
              <p><strong>8.3.</strong> Users will be informed of the outcome through their registered email address or other available communication channel.</p>
              <p><strong>8.4.</strong> Where a refund is approved, it will generally be initiated through the original payment method or another legally permitted method.</p>
              <p><strong>8.5.</strong> Refund decisions will be made fairly and in accordance with applicable consumer protection laws.</p>
            </div>

            <div className="disclaimer-section">
              <h3>9. Refund Processing Time</h3>
              <p><strong>9.1.</strong> Once a refund is approved, the Company will initiate the refund within a reasonable processing period.</p>
              <p><strong>9.2.</strong> The actual time taken for the refunded amount to appear in the user's account may depend on the bank, card issuer, UPI provider or payment gateway.</p>
              <p><strong>9.3.</strong> If the refund is delayed beyond the communicated processing period, users may contact the support team with their transaction reference.</p>
            </div>

            <div className="disclaimer-section">
              <h3>10. Subscription Access During Refund Review</h3>
              <p><strong>10.1.</strong> The Company may temporarily restrict the relevant subscription where necessary to investigate a refund request involving duplicate payments, unauthorised transactions, suspected fraud or incorrect activation.</p>
              <p><strong>10.2.</strong> Where a refund is approved for a subscription, access to the corresponding paid services may be discontinued from the effective date of the refund or as otherwise communicated.</p>
              <p><strong>10.3.</strong> The Company will handle subscription access and refunds fairly, taking into account the nature of the complaint and applicable legal requirements.</p>
            </div>

            <div className="disclaimer-section">
              <h3>11. Cancellation or Modification of Services by the Company</h3>
              <p><strong>11.1.</strong> The Company reserves the right to modify, suspend or discontinue particular examination categories, learning packages, tests or Platform features where reasonably necessary.</p>
              <p><strong>11.2.</strong> If a material change affects an active paid subscription, the Company will consider an appropriate alternative service, extension, refund or other remedy depending on the circumstances and applicable law.</p>
              <p><strong>11.3.</strong> If the Company discontinues a purchased service and is unable to provide the promised benefits, users may be eligible for an appropriate refund or alternative remedy.</p>
            </div>

            <div className="disclaimer-section">
              <h3>12. Promotional Offers and Discounted Packages</h3>
              <p><strong>12.1.</strong> Promotional offers, discount codes, special packages and limited-period subscription plans may be subject to additional conditions disclosed at the time of purchase.</p>
              <p><strong>12.2.</strong> Refund requests involving promotional or discounted purchases will be assessed based on the actual amount paid, the nature of the issue and applicable law.</p>
              <p><strong>12.3.</strong> Promotional benefits or discounts will not be converted into cash unless expressly stated or required by law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>13. Fraudulent or Misleading Refund Claims</h3>
              <p>The Company reserves the right to investigate refund requests involving suspected fraud, false payment information, manipulated transaction records or misuse of the Platform.</p>
              <p>Where credible evidence of fraudulent activity is identified, the Company may take appropriate action in accordance with its Terms & Conditions and applicable law.</p>
              <p>This provision does not restrict genuine users from exercising their legal rights.</p>
            </div>

            <div className="disclaimer-section">
              <h3>14. Consumer Rights</h3>
              <p>Nothing in this policy is intended to exclude, restrict or override any rights or remedies available to consumers under applicable Indian laws, including the Consumer Protection Act, 2019 and applicable rules.</p>
              <p>Where a refund, cancellation or other remedy is legally required, the Company will comply with the applicable legal requirements.</p>
            </div>

            <div className="disclaimer-section">
              <h3>15. Changes to This Policy</h3>
              <p>The Company may revise this Cancellation & Refund Policy from time to time to reflect changes in subscription packages, services, business practices or applicable laws.</p>
              <p>The updated policy will be published on the Platform with a revised "Last Updated" date.</p>
              <p>Users are encouraged to review the policy before making a subscription purchase.</p>
            </div>

            <div className="disclaimer-section">
              <h3>16. Contact and Grievance Redressal</h3>
              <p>For subscription cancellation, refund requests, payment disputes or other concerns, users may contact:</p>
              <div className="contact-box-info">
                <p><strong>Company:</strong> Naavic Edutech Private Limited</p>
                <p><strong>Platform:</strong> Vaagai Study</p>
                <p><strong>Website:</strong> <a href="https://vaagaistudy.com" target="_blank" rel="noreferrer">https://vaagaistudy.com</a></p>
                <p><strong>Grievance Officer:</strong> Mr. K Ragu</p>
                <p><strong>Designation:</strong> CEO</p>
                <p><strong>Email:</strong> naavicedutech@gmail.com</p>
                <p><strong>Registered Office Address:</strong> 135/1A, KKP Street, AS Pet, Namakkal, Tamilnadu - 637001</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="btn-primary">← Back to Home</button>
            </div>
          </div>
        </div>
      ) : activePage === 'privacy' ? (
        <div className="disclaimer-page vaagai-container animate-fade-in">
          <div className="disclaimer-card">
            <h2>PRIVACY POLICY</h2>
            <p className="effective-date"><strong>Effective Date:</strong> November 1, 2026 | <strong>Last Updated:</strong> November 1, 2026</p>
            <p className="platform-owner"><strong>Vaagai Study</strong> – www.vaagaistudy.com<br/>Owned and Operated by Naavic Edutech Private Limited</p>

            <div className="disclaimer-section">
              <h3>1. Introduction</h3>
              <p>Welcome to Vaagai Study.</p>
              <p>Vaagai Study is an online educational and examination preparation platform owned and operated by Naavic Edutech Private Limited ("Company", "we", "our" or "us").</p>
              <p>We respect the privacy of our learners, parents and visitors. This Privacy Policy explains how we collect, use, store, process, share and protect personal information when you access or use our website, mobile application and related services (collectively referred to as the "Platform").</p>
              <p>By accessing or using Vaagai Study, you acknowledge that you have read this Privacy Policy. Where consent is required by applicable law, we will obtain it through an appropriate consent mechanism.</p>
            </div>

            <div className="disclaimer-section">
              <h3>2. Scope of This Policy</h3>
              <p>This Privacy Policy applies to:</p>
              <ul>
                <li>Visitors browsing the Vaagai Study website.</li>
                <li>Individuals registering for a Vaagai Study account.</li>
                <li>Students using our study materials and daily tests.</li>
                <li>Subscribers purchasing educational packages.</li>
                <li>Parents or legal guardians interacting with the Platform on behalf of learners.</li>
                <li>Individuals contacting our customer support or grievance team.</li>
              </ul>
              <p>This policy covers personal information collected through our website, mobile application, registration forms, subscription services, assessments and customer support channels.</p>
            </div>

            <div className="disclaimer-section">
              <h3>3. Information We Collect</h3>
              <p>Depending on how you use the Platform, we may collect the following categories of information.</p>
              <p><strong>3.1 Personal and Registration Information:</strong> Full name, mobile number, email address, date of birth or age, state, city or location information, and other details provided during registration.</p>
              <p><strong>3.2 Parent or Guardian Information:</strong> Relevant parent or guardian details including name, contact info, and consent records where learners are below 18.</p>
              <p><strong>3.3 Learning and Assessment Information:</strong> Selected examination category, subjects, test attempts, submitted answers, scores, subject-wise performance, progress reports, and learning activity history.</p>
              <p><strong>3.4 Subscription and Payment Information:</strong> Selected package, transaction reference, payment status, activation and expiry details, and billing info. (Sensitive card details/UPI PINs are handled securely by authorized third-party payment gateways).</p>
              <p><strong>3.5 Technical and Device Information:</strong> IP address, device type, operating system, browser version, app version, access date/time, error logs, and diagnostic information.</p>
              <p><strong>3.6 Communication Information:</strong> Emails, support requests, feedback forms, complaints, and telephone communications.</p>
            </div>

            <div className="disclaimer-section">
              <h3>4. How We Use Your Information</h3>
              <p>We use personal information for legitimate purposes, including:</p>
              <ul>
                <li><strong>Account Management:</strong> To create, authenticate and manage learner accounts.</li>
                <li><strong>Educational Services:</strong> To provide study materials, learning resources and examination-specific content.</li>
                <li><strong>Daily Assessments:</strong> To conduct practice tests, record answers and calculate scores.</li>
                <li><strong>Performance Analysis:</strong> To generate reports, identify learning gaps and track progress.</li>
                <li><strong>Subscription Management:</strong> To process purchases, activate packages and handle payments.</li>
                <li><strong>Customer Support:</strong> To respond to questions, complaints and technical issues.</li>
                <li><strong>Platform Improvement:</strong> To understand usage patterns and enhance user experience.</li>
                <li><strong>Security & Compliance:</strong> To detect fraud, ensure security, and meet legal/regulatory obligations.</li>
              </ul>
            </div>

            <div className="disclaimer-section">
              <h3>5. Consent and User Choices</h3>
              <p><strong>5.1.</strong> Where consent is required, we seek it through appropriate mechanisms.</p>
              <p><strong>5.2.</strong> Users are informed about collected data categories and processing purposes.</p>
              <p><strong>5.3.</strong> Users may withdraw consent by contacting us or via account settings.</p>
              <p><strong>5.4.</strong> Withdrawal does not affect prior lawful processing, though some services may become unavailable.</p>
            </div>

            <div className="disclaimer-section">
              <h3>6. Children's Privacy</h3>
              <p>Vaagai Study recognizes the importance of protecting children's personal information.</p>
              <ul>
                <li>We implement parent or legal guardian consent mechanisms where required.</li>
                <li>We collect only information reasonably necessary for educational services.</li>
                <li>We do not knowingly use children's personal info for targeted advertising.</li>
                <li>Parents may contact us regarding a child's privacy rights.</li>
              </ul>
            </div>

            <div className="disclaimer-section">
              <h3>7. Sharing of Personal Information</h3>
              <p>We do not sell personal information to third parties. Limited info may be shared with:</p>
              <ul>
                <li><strong>Technology & Hosting Providers:</strong> Cloud infrastructure and technical partners.</li>
                <li><strong>Payment Service Providers:</strong> Gateways and banks for processing transactions.</li>
                <li><strong>Communication Providers:</strong> Email, SMS, and notification tools.</li>
                <li><strong>Advisors & Authorities:</strong> Legal/professional advisors or government bodies when required by law.</li>
              </ul>
            </div>

            <div className="disclaimer-section">
              <h3>8. Cookies and Similar Technologies</h3>
              <p>We use cookies and local storage to maintain login sessions, remember preferences, improve website functionality, and monitor technical performance.</p>
            </div>

            <div className="disclaimer-section">
              <h3>9. Data Retention</h3>
              <p>We retain personal information only as long as necessary to maintain accounts, provide educational services, manage subscriptions, respond to requests, and meet legal/tax obligations.</p>
            </div>

            <div className="disclaimer-section">
              <h3>10. Data Security</h3>
              <p>We apply reasonable technical and organizational measures (such as encryption, secure authentication, and restricted access) to safeguard user data.</p>
            </div>

            <div className="disclaimer-section">
              <h3>11. Data Breach and Security Incidents</h3>
              <p>We assess security incidents promptly and notify affected users and regulatory authorities where required by applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>12. User Rights and Privacy Requests</h3>
              <p>Users have rights to access, correct, update, or request deletion of personal information, as well as withdraw consent or raise privacy complaints by reaching out to our Grievance Officer.</p>
            </div>

            <div className="disclaimer-section">
              <h3>13. Third-Party Websites and Services</h3>
              <p>Our Platform may contain links to external websites governed by their own privacy policies. We do not control independent third-party practices.</p>
            </div>

            <div className="disclaimer-section">
              <h3>14. Marketing and Promotional Communications</h3>
              <p>We send essential service notifications and provide opt-out mechanisms for promotional communications as required by law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>15. Changes to This Privacy Policy</h3>
              <p>We may update this policy periodically, publishing the revised version with an updated "Last Updated" date on the Platform.</p>
            </div>

            <div className="disclaimer-section">
              <h3>16. Contact and Grievance Redressal</h3>
              <p>For questions, concerns, or requests regarding this Privacy Policy, please contact:</p>
              <div className="contact-box-info">
                <p><strong>Company:</strong> Naavic Edutech Private Limited</p>
                <p><strong>Platform:</strong> Vaagai Study</p>
                <p><strong>Website:</strong> <a href="https://vaagaistudy.com" target="_blank" rel="noreferrer">https://vaagaistudy.com</a></p>
                <p><strong>Grievance Officer:</strong> Mr. K Ragu</p>
                <p><strong>Designation:</strong> CEO</p>
                <p><strong>Email:</strong> naavicedutech@gmail.com</p>
                <p><strong>Registered Office Address:</strong> 135/1A, KKP Street, AS Pet, Namakkal, Tamilnadu - 637001</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="btn-primary">← Back to Home</button>
            </div>
          </div>
        </div>
      ) : activePage === 'terms' ? (
        <div className="disclaimer-page vaagai-container animate-fade-in">
          <div className="disclaimer-card">
            <h2>TERMS & CONDITIONS</h2>
            <p className="effective-date"><strong>Effective Date:</strong> November 1, 2026 | <strong>Last Updated:</strong> November 1, 2026</p>
            <p className="platform-owner"><strong>Vaagai Study</strong> – www.vaagaistudy.com<br/>Owned and Operated by Naavic Edutech Private Limited</p>

            <div className="disclaimer-section">
              <h3>1. Introduction</h3>
              <p>Welcome to Vaagai Study.</p>
              <p>Vaagai Study is an online educational and examination preparation platform owned and operated by Naavic Edutech Private Limited ("Company", "we", "our" or "us").</p>
              <p>Through our website, mobile application and related services (collectively, the "Platform"), we provide examination-oriented learning resources, syllabus-based study materials, daily practice tests, performance analysis and other educational services to support students preparing for competitive examinations, career opportunities and higher-education entrance examinations.</p>
              <p>By accessing or using the Platform, creating an account or purchasing a subscription package, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use the Platform.</p>
            </div>

            <div className="disclaimer-section">
              <h3>2. Definitions</h3>
              <p>For the purpose of these Terms:</p>
              <ul>
                <li><strong>Platform:</strong> Refers to the Vaagai Study website, mobile application and associated digital services.</li>
                <li><strong>User / Learner:</strong> Any individual who accesses, registers for or uses the Platform.</li>
                <li><strong>Account:</strong> The registered user profile created to access Platform services.</li>
                <li><strong>Subscription / Package:</strong> A paid or promotional learning plan providing access to specified educational features for a defined period.</li>
                <li><strong>Study Content:</strong> Includes notes, learning materials, questions, explanations, tests, practice exercises, reports and other educational resources.</li>
                <li><strong>Company:</strong> Refers to Naavic Edutech Private Limited, the owner and operator of Vaagai Study.</li>
              </ul>
            </div>

            <div className="disclaimer-section">
              <h3>3. Eligibility and User Registration</h3>
              <p><strong>3.1.</strong> Users must provide accurate and complete information during registration.</p>
              <p><strong>3.2.</strong> Users must be legally competent to enter into a binding agreement. Where a learner is below 18 years of age, a parent or legal guardian must provide the required consent and supervise the learner's use of the Platform, wherever required by applicable law.</p>
              <p><strong>3.3.</strong> Users are responsible for maintaining the confidentiality of their login credentials and for activities carried out through their accounts.</p>
              <p><strong>3.4.</strong> Each account is intended for individual use. Sharing, selling, transferring or commercially exploiting account access is prohibited unless expressly authorised by the Company.</p>
              <p><strong>3.5.</strong> Users must promptly inform the Company if they suspect unauthorised access to their accounts.</p>
              <p><strong>3.6.</strong> The Company reserves the right to verify registration information and restrict accounts where false, misleading or fraudulent information is identified, subject to applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>4. Services Offered</h3>
              <p>Vaagai Study provides digital educational and examination preparation services, which may include:</p>
              <ul>
                <li>Examination-specific study materials and learning resources.</li>
                <li>Daily practice tests and mock examinations.</li>
                <li>Questions structured around the relevant examination pattern.</li>
                <li>Subject-wise and topic-wise assessments.</li>
                <li>Performance analysis and progress reports.</li>
                <li>Learning recommendations and improvement insights.</li>
                <li>Subscription-based access to selected educational packages.</li>
                <li>Additional educational features introduced from time to time.</li>
              </ul>
              <p>The Company initially focuses on TNPSC examination preparation and may progressively expand its services to other competitive, career-oriented and higher-education entrance examinations across India, including NEET.</p>
              <p>The availability of particular examinations, subjects, content, features and packages may vary.</p>
            </div>

            <div className="disclaimer-section">
              <h3>5. Examination Content and Learning Resources</h3>
              <p><strong>5.1.</strong> Study materials and assessments are developed or curated with reference to the relevant examination syllabus and publicly available examination information, wherever applicable.</p>
              <p><strong>5.2.</strong> The Company makes reasonable efforts to maintain the relevance, accuracy and quality of its educational content.</p>
              <p><strong>5.3.</strong> Examination syllabuses, patterns, eligibility requirements, notifications and official guidelines may change. Users are responsible for referring to the respective official examination authorities for the latest and authoritative information.</p>
              <p><strong>5.4.</strong> Vaagai Study is an independent educational platform. Unless expressly stated otherwise, it is not affiliated with, endorsed by or officially associated with TNPSC, NTA, NEET examination authorities, government departments, universities or other examination-conducting bodies.</p>
              <p><strong>5.5.</strong> The Platform is intended to support examination preparation. It does not guarantee that every question, topic or learning resource will appear in an actual examination.</p>
              <p><strong>5.6.</strong> Users are encouraged to supplement Platform resources with official notifications, prescribed textbooks and other relevant learning resources.</p>
            </div>

            <div className="disclaimer-section">
              <h3>6. Daily Tests and Assessments</h3>
              <p><strong>6.1.</strong> The Company may provide daily tests, mock tests, practice questions and other assessments based on the selected examination and subscription package.</p>
              <p><strong>6.2.</strong> Test availability, duration, question count, marking scheme, difficulty level and other assessment conditions may vary according to the examination and package.</p>
              <p><strong>6.3.</strong> Users must attempt assessments independently and must not engage in cheating, impersonation, unauthorised collaboration, automated answer submission or other forms of assessment manipulation.</p>
              <p><strong>6.4.</strong> The Company may invalidate test attempts, withhold results or restrict access where credible evidence of malpractice, technical manipulation or violation of these terms is identified. Appropriate notice and an opportunity to respond may be provided where reasonably practicable.</p>
              <p><strong>6.5.</strong> Test scores and rankings are indicative learning and assessment measures. They are not official examination results and do not guarantee actual examination performance.</p>
              <p><strong>6.6.</strong> The Company may modify or update test questions, answer keys, explanations, assessment formats and schedules to improve the learning experience.</p>
            </div>

            <div className="disclaimer-section">
              <h3>7. Performance Analysis and Reports</h3>
              <p><strong>7.1.</strong> Vaagai Study may generate subject-wise, topic-wise and overall performance reports based on a user's test activity and available assessment data.</p>
              <p><strong>7.2.</strong> Such reports are intended to help learners understand their preparation progress, identify strengths and recognise areas requiring improvement.</p>
              <p><strong>7.3.</strong> Performance reports, recommendations, scores and analytics are educational guidance tools and should not be treated as a guarantee of examination success.</p>
              <p><strong>7.4.</strong> Report availability and analytical features may depend on the user's subscription package and the information available through the Platform.</p>
              <p><strong>7.5.</strong> Users are responsible for reviewing their reports and using the insights as part of their individual study plans.</p>
            </div>

            <div className="disclaimer-section">
              <h3>8. Subscription Packages and Payments</h3>
              <p><strong>8.1.</strong> Vaagai Study may offer different subscription packages based on examination categories, duration, content access and available features.</p>
              <p><strong>8.2.</strong> Users may select and purchase the package that best suits their learning requirements.</p>
              <p><strong>8.3.</strong> Package descriptions, prices, validity periods, included features and applicable taxes will be displayed before purchase.</p>
              <p><strong>8.4.</strong> Subscription access will generally be activated after successful payment confirmation, subject to payment gateway processing and technical conditions.</p>
              <p><strong>8.5.</strong> Unless expressly stated at the time of purchase, a subscription is valid only for the specified package and subscription period.</p>
              <p><strong>8.6.</strong> A subscription does not automatically include access to every examination category, course, feature or future service offered through Vaagai Study.</p>
              <p><strong>8.7.</strong> Unless expressly disclosed and separately authorised by the user, subscriptions will not be automatically renewed. Users must purchase a new subscription to continue access after expiry.</p>
              <p><strong>8.8.</strong> Users must ensure that payment details are accurate and that payments are made through authorised payment channels provided by the Platform.</p>
              <p><strong>8.9.</strong> The Company shall not be responsible for payment failures caused by banks, payment gateways, telecommunications providers or other third-party payment service providers, but will make reasonable efforts to assist users in resolving genuine payment-related issues.</p>
            </div>

            <div className="disclaimer-section">
              <h3>9. Subscription Validity, Access and Expiry</h3>
              <p><strong>9.1.</strong> Subscription access begins upon successful activation and continues for the validity period specified in the selected package.</p>
              <p><strong>9.2.</strong> Access to paid content and features may be restricted or discontinued upon expiry of the subscription.</p>
              <p><strong>9.3.</strong> Users are responsible for monitoring their subscription validity and renewing their subscriptions if they wish to continue using paid services.</p>
              <p><strong>9.4.</strong> The Company may introduce, modify or discontinue subscription packages and features for future purchases. Changes will not unfairly remove benefits already purchased for an active subscription, except where required by law or reasonably necessary due to circumstances beyond the Company's control.</p>
            </div>

            <div className="disclaimer-section">
              <h3>10. Cancellation and Refunds</h3>
              <p><strong>10.1.</strong> All subscription purchases are subject to the applicable Cancellation and Refund Policy displayed on the Platform at the time of purchase.</p>
              <p><strong>10.2.</strong> Users should carefully review package descriptions, validity periods, pricing and included features before confirming a purchase.</p>
              <p><strong>10.3.</strong> A request for cancellation or refund will be assessed in accordance with the applicable policy and laws governing consumer rights.</p>
              <p><strong>10.4.</strong> Refunds may be considered in circumstances such as duplicate payments, confirmed unauthorised transactions, failure to activate a purchased subscription or material failure to provide the purchased service, subject to verification and applicable law.</p>
              <p><strong>10.5.</strong> Refunds, where approved, will be processed through the original payment method or another legally permitted method within the applicable processing period.</p>
              <p><strong>10.6.</strong> Nothing in these Terms shall be interpreted as excluding or restricting any refund, cancellation or other consumer right that cannot legally be excluded.</p>
            </div>

            <div className="disclaimer-section">
              <h3>11. User Conduct and Acceptable Use</h3>
              <p>Users agree not to:</p>
              <ul>
                <li>Use the Platform for unlawful, fraudulent or unauthorised purposes.</li>
                <li>Share, distribute, reproduce or commercially exploit paid study materials without written permission.</li>
                <li>Copy, download, record, screen-capture or redistribute Platform content where such activity is prohibited.</li>
                <li>Attempt to hack, disrupt, reverse engineer or interfere with the Platform's systems.</li>
                <li>Use bots, scripts, automated tools or other unauthorised methods to access tests or manipulate results.</li>
                <li>Impersonate another learner or allow another person to take an assessment on their behalf.</li>
                <li>Upload malicious software, harmful files or misleading information.</li>
                <li>Harass, threaten or misuse communication facilities provided by the Platform.</li>
                <li>Attempt to gain unauthorised access to another user's account or personal information.</li>
              </ul>
              <p>The Company may investigate suspected violations and take proportionate action, including restricting access, suspending accounts or terminating services, subject to applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>12. Intellectual Property Rights</h3>
              <p><strong>12.1.</strong> The Platform and its original content, including text, study materials, question banks, explanations, designs, graphics, logos, software, reports, layouts and other materials, are owned by or licensed to Naavic Edutech Private Limited.</p>
              <p><strong>12.2.</strong> Users receive a limited, non-exclusive, non-transferable and revocable right to access and use the content for their personal, non-commercial educational purposes during the applicable access period.</p>
              <p><strong>12.3.</strong> No user may reproduce, republish, distribute, sell, modify, publicly display or commercially exploit any Platform content without prior written permission from the Company or the relevant rights holder.</p>
              <p><strong>12.4.</strong> All trademarks, service marks, brand names, logos and other intellectual property displayed on the Platform remain the property of their respective owners.</p>
              <p><strong>12.5.</strong> Unauthorised use of intellectual property may result in legal action under applicable laws.</p>
            </div>

            <div className="disclaimer-section">
              <h3>13. User Information and Privacy</h3>
              <p><strong>13.1.</strong> The Company may collect and process user information required to provide registration, authentication, subscription, learning, assessment, performance analysis, support and related services.</p>
              <p><strong>13.2.</strong> Personal information will be handled in accordance with the Vaagai Study Privacy Policy and applicable data protection laws.</p>
              <p><strong>13.3.</strong> Users must provide accurate information and keep their account details updated.</p>
              <p><strong>13.4.</strong> Users should review the Privacy Policy to understand what information is collected, how it is used, when it may be shared and what rights are available to them.</p>
              <p><strong>13.5.</strong> Where a learner is a child, applicable parental or guardian consent and other child-data safeguards will be followed as required by law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>14. Third-Party Services and Links</h3>
              <p><strong>14.1.</strong> The Platform may use third-party services such as payment gateways, hosting providers, analytics services, communication tools and other technology providers.</p>
              <p><strong>14.2.</strong> The Company may also provide links to external websites or resources for educational or informational purposes.</p>
              <p><strong>14.3.</strong> Third-party services and websites are governed by their respective terms and privacy policies.</p>
              <p><strong>14.4.</strong> The Company does not control all third-party services or external websites and shall not be responsible for their independent content, policies or availability, subject to applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>15. Platform Availability and Technical Issues</h3>
              <p><strong>15.1.</strong> The Company makes reasonable efforts to keep the website and mobile application accessible and operational.</p>
              <p><strong>15.2.</strong> Temporary interruptions may occur due to maintenance, upgrades, server issues, network failures, cyber incidents, third-party service interruptions or other circumstances.</p>
              <p><strong>15.3.</strong> The Company may temporarily suspend access to perform maintenance, improve performance, update content or address security concerns.</p>
              <p><strong>15.4.</strong> Users are responsible for maintaining a compatible device, internet connection, updated application and other technical requirements necessary to access the Platform.</p>
              <p><strong>15.5.</strong> The Company will make reasonable efforts to address verified technical issues affecting purchased services.</p>
            </div>

            <div className="disclaimer-section">
              <h3>16. Educational Disclaimer</h3>
              <p><strong>16.1.</strong> Vaagai Study is an educational support platform and is not an examination-conducting authority, government recruitment agency, university or official admissions body.</p>
              <p><strong>16.2.</strong> The Company does not guarantee selection, admission, employment, qualification, rank, marks or success in any examination.</p>
              <p><strong>16.3.</strong> Actual examination results depend on several factors, including individual preparation, examination conditions, eligibility, competition and the decisions of the relevant authorities.</p>
              <p><strong>16.4.</strong> Users must independently verify examination notifications, application deadlines, eligibility criteria, syllabus changes and official results through the relevant examination authorities.</p>
            </div>

            <div className="disclaimer-section">
              <h3>17. Limitation of Liability</h3>
              <p><strong>17.1.</strong> The Company shall make reasonable efforts to provide reliable educational services and accurate learning resources.</p>
              <p><strong>17.2.</strong> To the extent permitted by applicable law, the Company shall not be liable for indirect or consequential losses arising from temporary service interruptions, third-party service failures, unauthorised user activity or reliance on educational information without independent verification.</p>
              <p><strong>17.3.</strong> Nothing in these Terms excludes liability for fraud, wilful misconduct, gross negligence where applicable, or any liability that cannot legally be excluded or limited.</p>
              <p><strong>17.4.</strong> The Company does not accept responsibility for decisions made by users solely on the basis of Platform-generated scores, reports or recommendations.</p>
            </div>

            <div className="disclaimer-section">
              <h3>18. Suspension and Termination</h3>
              <p><strong>18.1.</strong> The Company may suspend or terminate an account where a user:</p>
              <ul>
                <li>Materially violates these Terms.</li>
                <li>Engages in fraudulent or unlawful activity.</li>
                <li>Misuses Platform content or intellectual property.</li>
                <li>Attempts to compromise the security or integrity of the Platform.</li>
                <li>Uses the Platform in a manner that harms other users or the Company's legitimate interests.</li>
              </ul>
              <p><strong>18.2.</strong> Where reasonably practicable, the Company will provide notice and an opportunity to resolve the issue before taking action, except where immediate action is necessary for security, legal compliance or prevention of harm.</p>
              <p><strong>18.3.</strong> Suspension or termination will not affect rights or obligations that accrued before termination. Any refund or other entitlement will be handled in accordance with the applicable policy and law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>19. Changes to Services and Terms</h3>
              <p><strong>19.1.</strong> The Company may update, modify, expand or discontinue certain Platform features, educational resources, examination categories or subscription packages.</p>
              <p><strong>19.2.</strong> These Terms may be revised from time to time to reflect changes in services, technology or applicable laws.</p>
              <p><strong>19.3.</strong> Updated Terms will be published on the Platform with a revised "Last Updated" date.</p>
              <p><strong>19.4.</strong> Where a change materially affects users, the Company will provide appropriate notice where required by law.</p>
              <p><strong>19.5.</strong> Continued use of the Platform after updated Terms become effective will be subject to the revised Terms, to the extent permitted by applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>20. Governing Law and Jurisdiction</h3>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
              <p>Subject to applicable consumer protection laws and the jurisdiction of competent authorities, courts having jurisdiction over the Company's registered office shall have jurisdiction over disputes arising from these Terms.</p>
              <p>Nothing in this clause restricts a consumer from exercising any statutory right to approach a competent consumer commission or other authority having jurisdiction under applicable law.</p>
            </div>

            <div className="disclaimer-section">
              <h3>21. Grievance Redressal</h3>
              <p>For questions, complaints, payment-related issues, subscription concerns or other grievances relating to Vaagai Study, users may contact the Company through the details below:</p>
              <div className="contact-box-info">
                <p><strong>Grievance Officer:</strong> Mr. K Ragu</p>
                <p><strong>Designation:</strong> CEO</p>
                <p><strong>Company:</strong> Naavic Edutech Private Limited</p>
                <p><strong>Platform:</strong> Vaagai Study</p>
                <p><strong>Website:</strong> <a href="https://vaagaistudy.com" target="_blank" rel="noreferrer">https://vaagaistudy.com</a></p>
                <p><strong>Email:</strong> naavicedutech@gmail.com</p>
                <p><strong>Registered Office Address:</strong> 135/1A, KKP Street, AS Pet, Namakkal, Tamilnadu - 637001</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="btn-primary">← Back to Home</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* HERO SECTION (HOME) */}
          <section id="home" className="hero-section animate-fade-in">
            <div className="vaagai-container hero-grid">
              <div className="hero-content">
                <div className="badge animate-bounce-short"> Your Journey to Success Starts Here</div>
                <h1>Learn with Purpose. Practice with Confidence. <span className="highlight-text">Achieve Your Goals.</span></h1>
                <p>Vaagai Study is an integrated online learning and examination preparation platform designed to help students prepare effectively for competitive examinations, career opportunities and higher studies.</p>
                
                <div className="hero-tagline">
                  <span> Syllabus-Based Learning</span>
                  <span>Daily Exam-Pattern Tests</span>
                  <span> Performance Analysis</span>
                </div>
              </div>

              <div className="hero-card hover-lift">
                <div className="card-header-tag">Naavic Edutech Initiative</div>
                <h3>Prepare Smarter. Perform Better.</h3>
                <p>Successful exam preparation is not just about studying more — it is about studying with the right resources, practising consistently and understanding your performance.</p>
                
                <div className="stats-box">
                  <div>
                    <h4>TNPSC</h4>
                    <p>Starting Journey</p>
                  </div>
                  <div>
                    <h4>NEET & More</h4>
                    <p>Expansion Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES / WHAT WE OFFER */}
          <section id="features" className="features-section">
            <div className="vaagai-container">
              <div className="section-header">
                <h3>Core Offerings</h3>
                <h2>Everything You Need in One Platform</h2>
                <p>Bring exam-specific preparation together with structured tools built for high achievers.</p>

                <div className="filter-tabs">
                  {['all', 'materials', 'practice', 'performance'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="features-grid">
                {filteredFeatures.map((feat) => (
                  <div key={feat.id} className="feature-card hover-scale">
                    <div>
                      <span className="feat-tag">{feat.tag}</span>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                    <div className="feat-link">Learn more →</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXAMINATION JOURNEY */}
          <section id="journey" className="journey-section">
            <div className="vaagai-container journey-grid">
              <div className="journey-box hover-lift">
                <h3>Our Examination Journey</h3>
                <p>We are beginning our journey with <strong>TNPSC examination preparation</strong>, with a vision to expand into various competitive, career-oriented and higher-education entrance examinations across India, including NEET.</p>
                <p>Our goal is to create a comprehensive learning ecosystem where every student can access relevant preparation resources for their chosen examination.</p>
              </div>

              <div className="approach-box hover-lift">
                <h3>Our Learning Approach</h3>
                <div className="flow-steps">
                  <span>Learn</span> → <span>Practice</span> → <span>Analyse</span> → <span>Improve</span> → <span>Achieve</span>
                </div>
                <p>At Vaagai Study, every test is an opportunity to learn. Every analysis is an opportunity to improve. We encourage continuous progression toward your goals.</p>
              </div>
            </div>
          </section>

          {/* VISION & MISSION */}
          <section className="vision-section">
            <div className="vaagai-container vision-grid">
              <div className="vision-card hover-glow">
                <h3>Our Vision</h3>
                <p>To become a trusted digital learning and examination preparation platform that empowers students across India with accessible learning resources, structured practice and meaningful performance insights.</p>
              </div>
              <div className="vision-card hover-glow">
                <h3>Our Mission</h3>
                <p>To make quality, syllabus-oriented exam preparation more accessible and effective through technology, consistent practice and data-driven performance analysis.</p>
              </div>
            </div>
          </section>

          {/* ABOUT US */}
          <section id="about" className="about-section">
            <div className="vaagai-container about-box hover-lift">
              <h3>About Us</h3>
              <p>Vaagai Study is owned and operated by <strong>Naavic Edutech Private Limited</strong>, an education technology initiative committed to developing meaningful digital learning solutions.</p>
              <p>We aim to support learners at every stage of their preparation journey by combining relevant educational content, regular assessments and actionable performance insights.</p>
              <div className="brand-tag">
                <span>🌐 Website: <a href="https://vaagaistudy.com" target="_blank" rel="noreferrer">https://vaagaistudy.com</a></span>
                <span>Owned by: Naavic Edutech Private Limited</span>
              </div>
            </div>
          </section>
        </>
      )}

     
      <footer className="vaagai-footer">
        <div className="vaagai-container footer-content">
          <div>
            <h3>VAAGAI STUDY</h3>
            <p>Syllabus-based learning, daily exam-pattern tests and subject-wise performance analysis — all in one place.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#home" onClick={() => setActivePage('home')}>Home</a>
            <a href="#journey" onClick={() => setActivePage('home')}>Journey</a>
            <a href="#about" onClick={() => setActivePage('home')}>About Us</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <button 
                onClick={() => { setActivePage('disclaimer'); window.scrollTo(0,0); }} 
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '14px' }}
              >
                Disclaimer
              </button>
              <button 
                onClick={() => { setActivePage('refund'); window.scrollTo(0,0); }} 
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '14px' }}
              >
                Cancellation & Refund Policy
              </button>
              <button 
                onClick={() => { setActivePage('privacy'); window.scrollTo(0,0); }} 
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '14px' }}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => { setActivePage('terms'); window.scrollTo(0,0); }} 
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '14px' }}
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <p><strong>Naavic Edutech Private Limited</strong></p>
            <p>Namakkal, Tamilnadu - 637001</p>
            <p>Official Site: vaagaistudy.com</p>
          </div>
        </div>
        <div className="vaagai-container footer-bottom">
          <p>© 2026 Vaagai Study. All rights reserved. Your Success, Our Learning Mission.</p>
        </div>
      </footer>

    </div>
  );
}
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");
const eventDetails = document.getElementById("eventDetails");
const viewBtn = document.getElementById("viewRegistrationsBtn");
const adminData = document.getElementById("adminData");

const events = {
  ai: {
    title: "🤖 AI Workshop",
    location: "BVC College - Seminar Hall, Room 101",
    image: "images/ai.jpg",
    guestImage: "guests/m.jpeg",
    fee: "₹250",
    contact: "9876543210",
    description: `
      Join us to explore the future of Artificial Intelligence with hands-on sessions and expert talks.
      <br/><br/>
      💡 <strong>What you’ll learn:</strong>
      <ul>
        <li>Machine Learning Basics</li>
        <li>Neural Networks & Deep Learning</li>
        <li>AI in Real Life Applications like Healthcare & Automation</li>
        <li>Live AI Model Demos & Q&A Sessions</li>
      </ul>
      👤 <strong>Guest:</strong> Mr. Madhu Vadlamani (Data Analytics & AI Specialist)
      <br/><br/>
      🧠 <em>No prior experience required! Ideal for students of all levels.</em>
    `
  },
  web: {
    title: "🌐 Web Dev Bootcamp",
    location: "Main Auditorium - Block A",
    image: "images/download.jpeg",
    guestImage: "guests/ravi.jpeg",
    fee: "₹250",
    contact: "9876543210",
    description: `
      Hands-on training to build modern, responsive websites using the latest tools in the industry.
      <br/><br/>
      📘 <strong>Topics Covered:</strong>
      <ul>
        <li>HTML, CSS, and JavaScript Essentials</li>
        <li>Responsive Design using Flexbox and Grid</li>
        <li>React.js Fundamentals</li>
        <li>Version Control with Git & Hosting on Vercel</li>
      </ul>
      👤 <strong>Guest:</strong> Mr. Ravi Reddy (Web Developer, JMAN Groups)
      <br/><br/>
      🔧 <em>Includes a mini-project: Build and deploy your own website!</em>
    `
  },
  flutter: {
    title: "🦋 Flutter Fest",
    location: "Tech Park - Lab 3",
    image: "images/download12.png",
    guestImage: "guests/ds.jpeg",
    fee: "₹250",
    contact: "9876543210",
    description: `
      A complete beginner-friendly session on building cross-platform mobile apps with Flutter.
      <br/><br/>
      📱 <strong>Highlights:</strong>
      <ul>
        <li>Flutter & Dart Basics</li>
        <li>Creating Beautiful UI with Widgets</li>
        <li>Navigation, Routing, and State Management</li>
        <li>Build Your First Mobile App with Firebase Integration</li>
      </ul>
      👤 <strong>Guest:</strong> Mr. Dhrumil Shah (Founder, Tata Neu)
      <br/><br/>
      🧩 <em>Includes hands-on activities and certificates!</em>
    `
  },
  drone: {
    title: "🚁 Drone Technology",
    location: "Innovation Lab - Block C",
    image: "images/drone.webp",
    guestImage: "guests/dronef.jpeg",
    fee: "₹450",
    contact: "9876543210",
    description: `
      Dive into the world of unmanned aerial vehicles and their revolutionary impact on industries.
      <br/><br/>
      ✈️ <strong>Covered Topics:</strong>
      <ul>
        <li>Basics of Drone Mechanics & Design</li>
        <li>Applications in Agriculture, Defense, and Delivery</li>
        <li>Live Flying Demo & Drone Building Workshop</li>
      </ul>
      👤 <strong>Guest:</strong> Mr. Aashish Aman (Founder and CEO, Equinox's Drones)
      <br/><br/>
      🔍 <em>Great opportunity for enthusiasts and engineering students!</em>
    `
  },
  nlp: {
    title: "🗣️ Natural Language Processing (NLP)",
    location: "Seminar Hall - Block B",
    image: "images/nlp.webp",
    guestImage: "guests/priya.jpeg",
    fee: "₹250",
    contact: "9876543210",
    description: `
      Explore the techniques behind modern voice assistants and language models.
      <br/><br/>
      🧾 <strong>Learn:</strong>
      <ul>
        <li>Text Preprocessing & Tokenization</li>
        <li>Byte Pair Encoding</li>
        <li>Transformers & BERT</li>
        <li>Text Classification & Sentiment Analysis</li>
      </ul>
      👤 <strong>Guest:</strong> Hemapriya N (Developer | Data & AI | WTM | GDG)
      <br/><br/>
      🔍 <em>Perfect for AI/ML aspirants!</em>
    `
  },
  chatbot: {
    title: "🤖 Chatbot Building Workshop",
    location: "AI Lab - Block D",
    image: "images/bot.jpg",
    guestImage: "guests/jy.jpeg",
    fee: "₹250",
    contact: "9876543210",
    description: `
      Build your own chatbot using simple tools and AI logic.
      <br/><br/>
      🧩 <strong>Workshop Includes:</strong>
      <ul>
        <li>Intro to NLP and Dialogflow</li>
        <li>Creating Custom Intents & Responses</li>
        <li>Integrating with Messaging Platforms</li>
        <li>Real-time Q&A Bots</li>
      </ul>
      👤 <strong>Guest:</strong> Ms. Jyoti Yadav (Founder and Director at chatbot.team)
      <br/><br/>
      💬 <em>No coding background needed!</em>
    `
  },
  hackathon: {
    title: "🚀 24 Hours Hackathon",
    location: "Innovation Hub - Open Arena",
    image: "images/24.jpg",
    guestImage: "guests/bala.jpeg",
    fee: "₹100",
    contact: "9876543210",
    description: `
      A full-day coding and innovation sprint to build real-world solutions.
      <br/><br/>
      ⚙️ <strong>Tracks:</strong>
      <ul>
        <li>AI & ML</li>
        <li>Web & App Development</li>
        <li>Sustainability & Smart Cities</li>
      </ul>
      🏆 <strong>Prizes worth ₹1,00,000!</strong><br/>
      👥 <strong>Guests & Jury:</strong> Mr. Bala Prasad (CIO, TCS)
      <br/><br/>
      🔥 <em>Collaborate. Code. Compete. Conquer.</em>
    `
  }
};

// 📝 Form Submission Handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const accommodation = document.getElementById("accommodation").value;
  const selectedEvent = document.getElementById("event").value;

  if (!name || !email || !selectedEvent || !address || !phone || !accommodation) {
    alert("Please fill in all fields.");
    return;
  }

  const event = events[selectedEvent];

  successMessage.innerText = `✅ Registered for ${event.title}. Thank you, ${name}!`;

  eventDetails.classList.remove("hidden");
  eventDetails.innerHTML = `
    <img src="${event.image}" alt="${event.title}" class="event-image" />
    <h3>${event.title}</h3>
    <p><strong>📍 Location:</strong> ${event.location}</p>
    <p><strong>💰 Registration Fee:</strong> ${event.fee}</p>
    <p><strong>📞 Contact:</strong> ${event.contact}</p>
    <div class="description">${event.description}</div>
    <div class="guest-photo">
      <img src="${event.guestImage}" alt="Guest" class="guest-img" />
    </div>
    <div class="payment-section">
      <h4>🔗 Payment</h4>
      <p>Scan the QR or click below to mark payment complete.</p>
      <img src="images/frame.png" alt="UPI QR" class="payment-qr" />
      <br/>
      <button class="pay-btn" id="markPaidBtn">✅ Mark as Paid</button>
    </div>
  `;

  let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push({
    name,
    email,
    address,
    phone,
    accommodation,
    event: event.title,
    payment: "No"
  });
  localStorage.setItem("registrations", JSON.stringify(registrations));

  form.reset();

  setTimeout(() => {
    const markPaidBtn = document.getElementById("markPaidBtn");
    if (markPaidBtn) {
      markPaidBtn.addEventListener("click", () => {
        const updated = JSON.parse(localStorage.getItem("registrations")) || [];
        const lastEntry = updated[updated.length - 1];
        lastEntry.payment = "Yes";
        updated[updated.length - 1] = lastEntry;
        localStorage.setItem("registrations", JSON.stringify(updated));
        alert("✅ Payment marked as completed!");
        markPaidBtn.innerText = "✔️ Paid";
        markPaidBtn.disabled = true;
      });
    }
  }, 100);
});

// 👀 View Registrations (Admin)
viewBtn.addEventListener("click", () => {
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  if (registrations.length === 0) {
    adminData.innerHTML = "<p>No registrations yet.</p>";
  } else {
    adminData.innerHTML =
      "<h3>📝 All Registrations</h3>" +
      registrations
        .map((reg, index) => `
        <p>
          <strong>#${index + 1}</strong><br/>
          👤 <strong>Name:</strong> ${reg.name}<br/>
          📧 <strong>Email:</strong> ${reg.email}<br/>
          🏠 <strong>Address:</strong> ${reg.address}<br/>
          📞 <strong>Phone:</strong> ${reg.phone}<br/>
          🛏️ <strong>Accommodation:</strong> ${reg.accommodation}<br/>
          🎯 <strong>Event:</strong> ${reg.event}<br/>
          💳 <strong>Payment Status:</strong> ${reg.payment || "No"}
        </p><hr/>
      `)
        .join("");
  }

  adminData.classList.remove("hidden");
});

// Global variables
let currentUser = null
let portfolioData = {
  profile: { name: "Mahek Chotara", title: "B.Tech IT Student", photo: "j.jpg" },
  about: "Hello! I'm Mahek Chotara, a final-year B.Tech student specializing in Information Technology...",
  education: {
    institution: "Marwadi University, Rajkot, Gujarat",
    years: "2023 – 2027",
    cgpa: "8.8 / 10",
    subjects: "Data Structures, DBMS, Operating Systems, Web Technologies, Computer Networks",
    skills: "Programming (Python, Java, C++), Database Management, Web Development, Problem Solving",
  },
  projects: [
    {
      title: "Reminder Application with Notification",
      description:
        "A desktop/mobile app that allows users to set reminders with custom titles, dates, and times. The app sends real-time notifications to remind users of tasks or events.",
      tech: "Java, MySQL, JavaFX, Android Studio, Firebase",
      url: "",
    },
    {
      title: "Online Quiz System",
      description:
        "A web-based quiz platform where students can register, attempt timed quizzes, and view their scores. Admin panel included for managing questions and users.",
      tech: "PHP, MySQL, HTML, CSS, JavaScript",
      url: "",
    },
    {
      title: "Mini Database Application",
      description: "A command-line or GUI-based mini database app to manage students' records using Python and SQL.",
      tech: "Python, MySQL (DBMS Project)",
      url: "",
    },
  ],
  contact: {
    name: "Mahek Chotara",
    email: "mahek@example.com",
    phone: "+91 93134 38948",
    location: "Rajkot, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/mahek-chotara-911683328",
  },
}

function showMessage(message, type = "error") {
  const container = document.getElementById("message-container")
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${type}`
  messageDiv.textContent = message
  container.innerHTML = ""
  container.appendChild(messageDiv)

  setTimeout(() => {
    messageDiv.remove()
  }, 5000)
}

// Validation function for email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validation function for phone numbers (10-15 digits with optional + and spaces)
function validatePhone(phone) {
  const phoneRegex = /^[+]?[\d\s-]{10,15}$/
  return phoneRegex.test(phone)
}

// Validation function for names (only letters and spaces, no numbers)
function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/
  return nameRegex.test(name)
}

// Validation function for CGPA (0-10 range)
function validateCGPA(cgpa) {
  const cgpaValue = Number.parseFloat(cgpa)
  return !isNaN(cgpaValue) && cgpaValue >= 0 && cgpaValue <= 10
}

// Validation function for URLs
function validateURL(url) {
  if (!url) return true // URL is optional
  try {
    new URL(url)
    return url.startsWith("http://") || url.startsWith("https://")
  } catch {
    return false
  }
}

// Validation function for year format (e.g., 2023 - 2027)
function validateYear(year) {
  const yearRegex = /^\d{4}\s*[-–]\s*\d{4}$/
  return yearRegex.test(year)
}

function getStoredUsers() {
  return JSON.parse(localStorage.getItem("portfolioUsers") || "[]")
}

function storeUser(user) {
  const users = getStoredUsers()
  users.push(user)
  localStorage.setItem("portfolioUsers", JSON.stringify(users))
}

function validateUser(email, password) {
  const users = getStoredUsers()
  return users.find((user) => user.email === email && user.password === password)
}

// Login/Register functionality
if (document.getElementById("login-form")) {
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")
  const toggleLink = document.getElementById("toggle-link")
  const toggleText = document.getElementById("toggle-text")
  const formTitle = document.getElementById("form-title")

  let isLoginMode = true

  // Toggle between login and register
  toggleLink.addEventListener("click", (e) => {
    e.preventDefault()
    isLoginMode = !isLoginMode

    if (isLoginMode) {
      loginForm.style.display = "block"
      registerForm.style.display = "none"
      formTitle.textContent = "Login to Admin Panel"
      toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Register here</a>'
    } else {
      loginForm.style.display = "none"
      registerForm.style.display = "block"
      formTitle.textContent = "Register for Admin Panel"
      toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login here</a>'
    }
  })

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("login-email").value.trim()
    const password = document.getElementById("login-password").value.trim()

    // Check if fields are empty
    if (!email || !password) {
      showMessage("Please fill up all details", "error")
      return
    }

    // Validate email format
    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address (e.g., user@example.com)", "error")
      return
    }

    const user = validateUser(email, password)
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
      window.location.href = "admin.html"
    } else {
      const users = getStoredUsers()
      const emailExists = users.find((u) => u.email === email)

      if (!emailExists) {
        showMessage("Please do register first", "error")
      } else {
        showMessage("Please enter valid password", "error")
      }
    }
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("register-name").value.trim()
    const email = document.getElementById("register-email").value.trim()
    const password = document.getElementById("register-password").value.trim()
    const confirmPassword = document.getElementById("register-confirm").value.trim()

    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      showMessage("Please fill up all details", "error")
      return
    }

    // Validate name (no numbers allowed)
    if (!validateName(name)) {
      showMessage("Name should only contain letters and spaces (no numbers or special characters)", "error")
      return
    }

    // Validate email format
    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address (e.g., user@example.com)", "error")
      return
    }

    // Validate password length
    if (password.length < 6) {
      showMessage("Password must be at least 6 characters long", "error")
      return
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      showMessage("Passwords do not match", "error")
      return
    }

    const users = getStoredUsers()
    if (users.find((user) => user.email === email)) {
      showMessage("Email already registered", "error")
      return
    }

    const newUser = { name, email, password }
    storeUser(newUser)

    showMessage("Registration successful!", "success")

    setTimeout(() => {
      // Switch to login mode
      isLoginMode = true
      loginForm.style.display = "block"
      registerForm.style.display = "none"
      formTitle.textContent = "Login to Admin Panel"
      toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Register here</a>'

      // Pre-fill login email
      document.getElementById("login-email").value = email
    }, 2000)
  })
}

// Admin panel functionality
if (document.getElementById("current-user")) {
  // Check if user is logged in
  currentUser = JSON.parse(localStorage.getItem("currentUser"))
  if (!currentUser) {
    window.location.href = "login.html"
  }

  document.getElementById("current-user").textContent = `Welcome, ${currentUser.name}`

  // Load stored portfolio data
  const storedData = localStorage.getItem("portfolioData")
  if (storedData) {
    portfolioData = JSON.parse(storedData)
  }

  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".admin-section")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetSection = link.getAttribute("data-section")

      // Remove active class from all links and sections
      navLinks.forEach((l) => l.classList.remove("active"))
      sections.forEach((s) => s.classList.remove("active"))

      // Add active class to clicked link and corresponding section
      link.classList.add("active")
      document.getElementById(`${targetSection}-section`).classList.add("active")
    })
  })

  // Logout functionality
  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser")
    window.location.href = "login.html"
  })

  // Profile photo upload
  document.getElementById("profile-upload").addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        document.getElementById("profile-preview").src = e.target.result
        portfolioData.profile.photo = e.target.result
      }
      reader.readAsDataURL(file)
    }
  })

  document.getElementById("save-profile").addEventListener("click", () => {
    const name = document.getElementById("profile-name").value.trim()
    const title = document.getElementById("profile-title").value.trim()

    // Check if all fields are filled
    if (!name || !title) {
      showMessage("Please fill up all details", "error")
      return
    }

    // Validate name (no numbers allowed)
    if (!validateName(name)) {
      showMessage("Name should only contain letters and spaces (no numbers or special characters)", "error")
      return
    }

    // Validate title length
    if (title.length < 3) {
      showMessage("Title must be at least 3 characters long", "error")
      return
    }

    portfolioData.profile.name = name
    portfolioData.profile.title = title

    addRecord("profile", {
      name: name,
      title: title,
      user: currentUser.name,
      timestamp: new Date().toLocaleString(),
    })

    showMessage("Profile saved successfully!", "success")
    savePortfolioData()
  })

  document.getElementById("save-about").addEventListener("click", () => {
    const intro = document.getElementById("about-intro").value.trim()

    // Check if field is filled
    if (!intro) {
      showMessage("Please fill up all details", "error")
      return
    }

    // Validate minimum length
    if (intro.length < 50) {
      showMessage("About section must be at least 50 characters long", "error")
      return
    }

    portfolioData.about = intro

    addRecord("about", {
      introduction: intro.substring(0, 100) + "...",
      user: currentUser.name,
      timestamp: new Date().toLocaleString(),
    })

    showMessage("About section saved successfully!", "success")
    savePortfolioData()
  })

  document.getElementById("save-education").addEventListener("click", () => {
    const institution = document.getElementById("edu-institution").value.trim()
    const years = document.getElementById("edu-years").value.trim()
    const cgpa = document.getElementById("edu-cgpa").value.trim()
    const subjects = document.getElementById("edu-subjects").value.trim()
    const skills = document.getElementById("edu-skills").value.trim()

    // Check if all fields are filled
    if (!institution || !years || !cgpa || !subjects || !skills) {
      showMessage("Please fill up all details", "error")
      return
    }

    // Validate institution name length
    if (institution.length < 3) {
      showMessage("Institution name must be at least 3 characters long", "error")
      return
    }

    // Validate year format
    if (!validateYear(years)) {
      showMessage("Please enter years in format: 2023 - 2027", "error")
      return
    }

    // Validate CGPA range
    if (!validateCGPA(cgpa)) {
      showMessage("Please enter a valid CGPA between 0 and 10", "error")
      return
    }

    // Validate subjects length
    if (subjects.length < 10) {
      showMessage("Please enter at least 10 characters for subjects", "error")
      return
    }

    // Validate skills length
    if (skills.length < 10) {
      showMessage("Please enter at least 10 characters for skills", "error")
      return
    }

    portfolioData.education = { institution, years, cgpa, subjects, skills }

    addRecord("education", {
      institution,
      years,
      cgpa,
      user: currentUser.name,
      timestamp: new Date().toLocaleString(),
    })

    showMessage("Education saved successfully!", "success")
    savePortfolioData()
  })

  document.getElementById("save-project").addEventListener("click", () => {
    const title = document.getElementById("project-title").value.trim()
    const description = document.getElementById("project-intro").value.trim()
    const tech = document.getElementById("project-tech").value.trim()
    const url = document.getElementById("project-url").value.trim()

    // Check if required fields are filled
    if (!title || !description || !tech) {
      showMessage("Please fill up all details (URL is optional)", "error")
      return
    }

    // Validate title length
    if (title.length < 5) {
      showMessage("Project title must be at least 5 characters long", "error")
      return
    }

    // Validate description length
    if (description.length < 20) {
      showMessage("Project description must be at least 20 characters long", "error")
      return
    }

    // Validate technologies length
    if (tech.length < 3) {
      showMessage("Technologies must be at least 3 characters long", "error")
      return
    }

    // Validate URL format if provided
    if (url && !validateURL(url)) {
      showMessage("Please enter a valid URL (e.g., https://example.com) or leave it empty", "error")
      return
    }

    const project = { title, description, tech, url }
    portfolioData.projects.push(project)

    addRecord("project", {
      title,
      tech,
      user: currentUser.name,
      timestamp: new Date().toLocaleString(),
    })

    // Clear form
    document.getElementById("project-title").value = ""
    document.getElementById("project-intro").value = ""
    document.getElementById("project-tech").value = ""
    document.getElementById("project-url").value = ""

    showMessage("Project saved successfully!", "success")
    savePortfolioData()
  })

  document.getElementById("save-contact").addEventListener("click", () => {
    const name = document.getElementById("contact-name").value.trim()
    const email = document.getElementById("contact-email").value.trim()
    const phone = document.getElementById("contact-phone").value.trim()
    const location = document.getElementById("contact-location").value.trim()
    const linkedin = document.getElementById("contact-linkedin").value.trim()

    // Check if required fields are filled
    if (!name || !email || !phone || !location) {
      showMessage("Please fill up all details (LinkedIn is optional)", "error")
      return
    }

    // Validate name (no numbers allowed)
    if (!validateName(name)) {
      showMessage("Name should only contain letters and spaces (no numbers or special characters)", "error")
      return
    }

    // Validate email format
    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address (e.g., user@example.com)", "error")
      return
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      showMessage("Please enter a valid phone number (10-15 digits, can include + and spaces)", "error")
      return
    }

    // Validate location length
    if (location.length < 3) {
      showMessage("Location must be at least 3 characters long", "error")
      return
    }

    // Validate LinkedIn URL if provided
    if (linkedin && !validateURL(linkedin)) {
      showMessage(
        "Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/username) or leave it empty",
        "error",
      )
      return
    }

    portfolioData.contact = { name, email, phone, location, linkedin }

    addRecord("contact", {
      name,
      email,
      phone,
      user: currentUser.name,
      timestamp: new Date().toLocaleString(),
    })

    showMessage("Contact saved successfully!", "success")
    savePortfolioData()
  })

  // Save all changes
  document.getElementById("save-all-changes").addEventListener("click", () => {
    updateIndexHTML()
    showMessage("All changes saved to portfolio!", "success")

    setTimeout(() => {
      window.open("index.html", "_blank")
    }, 1000)
  })

  // Initialize records display
  loadRecords()
}

// Record management functions
function addRecord(type, data) {
  const recordsContainer = document.getElementById(`${type}-records`)
  const recordId = Date.now()

  const recordDiv = document.createElement("div")
  recordDiv.className = "record-item"
  recordDiv.setAttribute("data-id", recordId)

  let recordHTML = ""

  switch (type) {
    case "profile":
      recordHTML = `
                <h4>${data.name}</h4>
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>User:</strong> ${data.user}</p>
                <p><strong>Updated:</strong> ${data.timestamp}</p>
            `
      break
    case "about":
      recordHTML = `
                <h4>About Introduction</h4>
                <p>${data.introduction}</p>
                <p><strong>User:</strong> ${data.user}</p>
                <p><strong>Updated:</strong> ${data.timestamp}</p>
            `
      break
    case "education":
      recordHTML = `
                <h4>${data.institution}</h4>
                <p><strong>Years:</strong> ${data.years}</p>
                <p><strong>CGPA:</strong> ${data.cgpa}</p>
                <p><strong>User:</strong> ${data.user}</p>
                <p><strong>Updated:</strong> ${data.timestamp}</p>
            `
      break
    case "project":
      recordHTML = `
                <h4>${data.title}</h4>
                <p><strong>Technologies:</strong> ${data.tech}</p>
                <p><strong>User:</strong> ${data.user}</p>
                <p><strong>Updated:</strong> ${data.timestamp}</p>
            `
      break
    case "contact":
      recordHTML = `
                <h4>${data.name}</h4>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>User:</strong> ${data.user}</p>
                <p><strong>Updated:</strong> ${data.timestamp}</p>
            `
      break
  }

  recordHTML += `
        <div class="record-actions">
            <button class="btn btn-small btn-edit" onclick="editRecord('${type}', ${recordId})">Edit</button>
            <button class="btn btn-small btn-delete" onclick="deleteRecord('${type}', ${recordId})">Delete</button>
        </div>
    `

  recordDiv.innerHTML = recordHTML
  recordsContainer.appendChild(recordDiv)
}

function editRecord(type, recordId) {
  // This would populate the form with the record data for editing
  showMessage("Edit functionality - populate form with record data", "success")
}

function deleteRecord(type, recordId) {
  if (confirm("Are you sure you want to delete this record?")) {
    const recordElement = document.querySelector(`[data-id="${recordId}"]`)
    if (recordElement) {
      recordElement.remove()
      showMessage("Record deleted successfully!", "success")
    }
  }
}

function loadRecords() {
  // Load existing records from localStorage if any
  const storedRecords = localStorage.getItem("portfolioRecords")
  if (storedRecords) {
    const records = JSON.parse(storedRecords)
    // Display stored records
  }
}

function savePortfolioData() {
  localStorage.setItem("portfolioData", JSON.stringify(portfolioData))
}

function updateIndexHTML() {
  // This function would update the index.html file with the new data
  // In a real implementation, this would require server-side functionality
  // For demo purposes, we'll just save to localStorage
  localStorage.setItem("updatedPortfolio", JSON.stringify(portfolioData))
  console.log("Portfolio data updated:", portfolioData)
}
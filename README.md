# 🚀 Find My Seat

**Find My Seat** is a wedding guest seating web app that helps guests quickly find which table they are assigned to at the wedding reception.

It is designed for ease of use, especially on mobile devices, and can be accessed directly via QR code shared with guests.

---

## 💡 What It Does

- Guests arrive at the venue, scan a QR code.
- They enter their name.
- The app displays the guest's full name and their assigned table.
- If they have children, their seats will also be shown.
- A full interactive floor plan of the dining area is displayed, with **all tables visible**.
- The guest’s table is **highlighted**, so they can quickly locate it in the venue.


---

## Project Overview

The project is made of two main parts:

### 🖥️ Backend

- **Folder:** `backend/`
- **Tech Stack:** Python (Flask)
- **Responsibilities:**
  - Serves the guest database, including names and assigned tables
  - Provides a specific image for each table, based on where the guest is seated
  - Responds to frontend requests with this data through a simple REST API


### 🌐 Frontend

- **Folder:** `frontend/`
- **Tech Stack:** React
- **Responsibilities:**
  - Provides a welcome page where users enter their name to find their seating information.
  - Fetches guest data and table images from the backend API
  - Displays the guest's name, assigned table, and children’s seating (if applicable)
  - Shows an interactive floor plan highlighting the guest’s table for easy location
  - Designed to work smoothly on mobile devices for quick access at the venue




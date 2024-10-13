# Profile Mapper

Profile Mapper is a web application built with React that allows users to view a list of profiles and interactively explore the addresses of each profile on a map. This application provides an intuitive and user-friendly way to navigate through profiles and visualize the geographic locations associated with each individual.

## Live Demo

Check out the live demo of the application [here](https://profile-mapper-five.vercel.app/).

![image](https://github.com/user-attachments/assets/b059b7e0-e6c4-4e32-9237-f0ff23ba605a)
![image](https://github.com/user-attachments/assets/c4d29e8d-d656-49fa-b895-6f1a601a4893)
![image](https://github.com/user-attachments/assets/b7975542-8cbc-428b-adfb-00597e715c8a)




## Features

- View a list of profiles with details like name, email, phone, and description.
- Interactive map to explore the addresses of each profile.
- CRUD operations to manage profiles (Create, Read, Update, Delete).
- Responsive design for seamless user experience on different devices.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/profile-mapper.git
    cd profile-mapper
    ```

2. **Install dependencies for the frontend:**

    ```bash
    npm install
    ```

3. **Set up JSON Server for the backend:**

    Install JSON Server if you haven't already:

    ```bash
    npm install -D json-server
    ```

4. **Create `db.json` in the project root with the following content:**

    ```json
    {
      "profiles": [
        {
          "id": 1,
          "name": "Amit Sharma",
          "email": "amit.sharma@example.com",
          "phone": "9123456780",
          "photo": "https://via.placeholder.com/150",
          "description": "A passionate software developer from Mumbai.",
          "address": {
            "street": "123 MG Road",
            "city": "Mumbai",
            "state": "Maharashtra",
            "zipcode": "400001",
            "geo": {
              "lat": "19.0760",
              "lng": "72.8777"
            }
          }
        }
        // Add more profiles as needed
      ]
    }
    ```

5. **Add a script to start JSON Server in `package.json`:**

    ```json
    "scripts": {
      "start:server": "json-server --watch db.json --port 3001"
    }
    ```

6. **Start the JSON Server:**

    ```bash
    npm run start:server
    ```

7. **Start the React development server:**

    ```bash
    npm start
    ```

8. **Open your browser and navigate to:**

    ```plaintext
    http://localhost:3000
    ```

## Usage

- View the list of profiles on the homepage.
- Click on a profile to see the detailed view and the address on the map.
- Use the map to explore the geographic location of the profile addresses.
- Add, edit, or delete profiles using the provided forms and buttons.

## Technologies

- **Frontend:** React, React Router, Axios
- **Backend:** JSON Server
- **Map Integration:** Google Maps API or Leaflet
- **Styling:** CSS, Bootstrap (optional)




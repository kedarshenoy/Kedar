import('../Styles/project.css')
const Projects=()=>{
    return(
        <>
        <div className="projectmainheading">Projects</div>
    <section className="firstproject">
      <div className="prtojectheading"><a className="link"href="https://aksfoodordering.onrender.com/"
      title="⚠ This website is hosted on a free instance. Please be aware that there might be occasional latency, slower loading times, or server crashes. We apologize for any inconvenience caused. Thank you for your understanding and patience!">A food ordering web application ↝</a></div>
      {/* <iframe src="./bootstrap/home.html" width="70%" height="60%"></iframe> */}
      <video className='video' src={require('../Assets/zomato.mp4')}  autoPlay muted playsInline loop></video>

      <div className="prtojectdesc">
      I am thrilled to present my latest project, a food ordering website built from scratch using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project not only demonstrates my proficiency in full-stack development but also showcases my ability to create intuitive user interfaces and integrate essential functionalities.
      <div className="sidepointsprojm">Technologies Used:</div>
        <div className="sidepointsproj">
          Front-End:
          <span className="valuesproj">React.js, Axios for API requests, carousels, and tabs components for a seamless user experience.</span>
        </div>
        <div className="sidepointsproj">
          Back-End: <span className="valuesproj">Express.js and Node.js for building robust APIs, MongoDB as the database using Mongoose for data modeling.</span>
        </div>
        <div className="sidepointsproj">
        Deployment: <span className="valuesproj">Hosted the website on Render, ensuring it's accessible to users globally.</span>
        </div>

        <div className="sidepointsprojm">Key Features:</div>
        <div className="sidepointsproj">
        User-Friendly Interface:
          <span className="valuesproj">Implemented intuitive carousels and tabs, allowing users to easily navigate through various food items and sections of the website.</span>
        </div>
        <div className="sidepointsproj">
        Efficient Backend: <span className="valuesproj">Developed a secure backend API handling order requests, managing user data, and storing food item details in a MongoDB database. Ensured data integrity and security using Mongoose.</span>
        </div>
        <div className="sidepointsproj">
        Deployment on Render: <span className="valuesproj">Hosted the website on Render, ensuring seamless performance and accessibility to users on the internet.</span>
        </div>
        <div className="sidepointsprojm">Ongoing Enhancements:</div>
        <div className="sidepointsproj">
        Payment Gateway Integration:
          <span className="valuesproj"> Currently working on integrating a payment gateway (e.g., Stripe) to facilitate secure online payments, ensuring a seamless and secure transaction process for users.</span>
        </div>
        <div className="sidepointsproj">
        Live Order Tracking:<span className="valuesproj">Implementing live order tracking functionality, allowing users to monitor their orders in real time, enhancing their overall experience and satisfaction.</span>
        </div>
        <div className="sidepointsprojm">Key Takeaways:</div>
        <div className="sidepointsproj">
          <span className="valuesproj">This project allowed me to enhance my skills in both frontend and backend development. I honed my abilities in creating interactive and visually appealing user interfaces, managing backend APIs, and ensuring a smooth deployment process.</span>
        </div>
      </div>
    </section>


    <section className="firstproject" > {/*  style="margin-bottom: 100px;"*/}
      <div className="prtojectheading"><a className="link"href="https://trycodeonline.onrender.com" 
      title="⚠ This website is hosted on a free instance. Please be aware that there might be occasional latency, slower loading times, or server crashes. We apologize for any inconvenience caused. Thank you for your understanding and patience!">tryCode ↝</a></div>
      {/* <iframe title="leetcode" src={require("../bootstrap/home.html")} width="70%" height="60%"></iframe> */}
      <video className='video' src={require('../Assets/leetcode.mp4')} autoPlay muted playsInline loop></video>
      <div className="prtojectdesc">
      I am excited to share my ongoing project, TryCode, a LeetCode clone that I'm currently developing using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project is a testament to my passion for coding and my commitment to building robust, interactive web applications.
       <div className="sidepointsprojm">Technologies Used:</div>
        <div className="sidepointsproj">
          Front-End:
          <span className="valuesproj"> React.js, React Tabs for intuitive user interface design.</span>
        </div>
        <div className="sidepointsproj">
          Back-End: <span className="valuesproj"> Express.js and Node.js for building custom APIs, MongoDB for data storage.</span>
        </div>
        <div className="sidepointsproj">
        Validation:<span className="valuesproj">Implementing code validation and submission using RabbitMQ, ensuring efficient and reliable processing of code submissions.</span>
        </div>
       <div className="sidepointsprojm">Key Features:</div> 
        <div className="sidepointsproj">
        Interactive User Interface:
          <span className="valuesproj">Designed an intuitive user interface using React Tabs, allowing users to seamlessly navigate between different coding problems and categories.</span>
        </div>
        <div className="sidepointsproj">
        Custom APIs: <span className="valuesproj">Developing custom APIs to handle user authentication, problem submissions, and code validation. These APIs will be integrated with the frontend, ensuring a seamless user experience.</span>
        </div>
        <div className="sidepointsproj">
        Code Validation and Submission: <span className="valuesproj">Implementing code validation and submission using RabbitMQ. This functionality will validate code submissions for correctness and efficiency, providing valuable feedback to users.</span>
        </div>
        <div className="sidepointsprojm">Upcoming Enhancements:</div>
        <div className="sidepointsproj">
        RabbitMQ Integration:
          <span className="valuesproj">Currently working on integrating RabbitMQ for efficient and asynchronous code validation and submission, enhancing the overall performance of the application.</span>
        </div>
        <div className="sidepointsproj">
        Docker Containerization: <span className="valuesproj">Planning to Dockerize the application for easy deployment and scaling, ensuring consistency across different environments.</span>
        </div>
        
      </div>
    </section>



    <section className="firstproject" > {/*  style="margin-bottom: 100px;"*/}
      <div className="prtojectheading" ><a className="link"href="https://github.com/kedarshenoy/DiabetesPrediction-">Diabetes Detection ↝</a></div>
      {/* <iframe src="./emp/tryhome.html" width="70%" height="60%"></iframe> */}
      <video className='video' src={require('../Assets/diabeets.mp4')}  autoPlay muted playsInline loop></video>

      <div className="prtojectdesc">
      I am excited to showcase my project focused on diabetes detection using machine learning algorithms. This project seamlessly integrates frontend technologies with backend development and machine learning, creating an interactive and user-friendly web application.
        <div className="sidepointsprojm">Technologies Used:</div>
        <div className="sidepointsproj">
          Front-End:
          <span className="valuesproj"> HTML, CSS, Bootstrap for responsive and visually appealing user interfaces.</span>
        </div>
        <div className="sidepointsproj">
          Back-End: <span className="valuesproj"> Flask, a lightweight Python web framework, for server-side logic and API development.</span>
        </div>
        <div className="sidepointsproj">
        Machine Learning Algorithms:<span className="valuesproj">  Random Forest (RF) and Support Vector Machine (SVM) for accurate diabetes prediction.</span>
        </div>
        <div className="sidepointsproj">
          Database: <span className="valuesproj">SQL for storing user data securely and managing authentication and authorization processes.</span>
        </div>



        <div className="sidepointsprojm">Key Features:</div>
        <div className="sidepointsproj">
        Diabetes Prediction:
          <span className="valuesproj"> Utilized Random Forest and Support Vector Machine algorithms to build accurate prediction models based on user inputs, allowing users to assess their risk of diabetes.</span>
        </div>
        <div className="sidepointsproj">
        User-Friendly Interface:  <span className="valuesproj">Designed an intuitive and visually appealing frontend using HTML, CSS, and Bootstrap, ensuring a seamless user experience across devices.</span>
        </div>


        <div className="sidepointsprojm">How It Works::</div>
        <div className="sidepointsproj">
        User Inputs
          <span className="valuesproj">Users input their relevant health data such as glucose levels, BMI, and blood pressure into the web application.</span>
        </div>
        <div className="sidepointsproj">
        Machine Learning Prediction:   <span className="valuesproj"> The application processes this data through RF and SVM algorithms, providing an accurate prediction regarding the likelihood of diabetes.</span>
        </div>
        <div className="sidepointsproj">
        Result Display   <span className="valuesproj"> Users receive the prediction results displayed on the website, helping them understand their risk and take appropriate actions.</span>
        </div>
      </div>
    </section>
        </>
    )

}

export default Projects;
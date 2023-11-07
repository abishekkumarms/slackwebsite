import "./contact.css";

function Contact()
{
  return(
    <body>
      <div class="containerr">
        <form>
          <h3>Contact us</h3>
          <br></br>
          <div class="form-group">
                <label for="name">Name:</label><br></br>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div class="form-group">
                <label for="email">Email:</label><br></br>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div class="form-group">
                <label for="message">Message:</label><br></br>
                <textarea id="message" name="message" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    </body>
  );
}

export default Contact;
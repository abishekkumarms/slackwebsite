import "./home.css";
function Content()
{
  return(
    <body>
      <main>
        <div class="left_content">
          <h1>Made for people.</h1>
          <h2>Built for productivity.</h2>
          <p>Connect the right people, find anything that you need and <br></br>automate the rest. That's work in Slack, your productivity platform.</p>
          <button>SIGNUP NOW</button>
          <p>Slack is free to try for as long as you like</p>

        </div>
        <div class="right_content">
          <video autoPlay muted loop preload="auto"  width={600} height={500}>
            <source src="discuss.webm"></source>
          </video>
        </div>
      </main>
    </body>
  );
}

function Trusted_companies()
{
  return(
    <body>
      <section class="trustedcompanies">
        <h5>TRUSTED BY COMPANIES ALL OVER THE WORLD</h5>
        <div class="companies">
          <center>
          <img src="logo-seek.png"></img>
          <img src="logo-xero.png"></img>
          <img src="rea.png"></img>
          <img src="rmit.png"></img>
          <img src="logo-ibm.png"></img>
          <img src="deliveroo.png"></img>
          </center>
        </div>


        <div class="trustedcontent">
        <div class="left_video_content">
        <video autoPlay muted loop preload="auto"  width={600} height={500}>
            <source src="working.webm"></source>
          </video>
        </div>
        <div class="right_trust_content">
          <h2>Move faster with your<br></br>tools in one place</h2>
          <p>Automate away routine tasks with the power of generative<br></br>AI and simplify your workflow with all your favourite apps ready<br></br>to go in Slack.</p>
          <a href="#">Learn more about the Slack platform --&gt;</a>
        </div>
        </div>


        <div class="trustedcontent">
        <div class="left_content">
          <h2>Choose how you<br></br>want to work</h2>
          <p>In Slack, you've got all the flexibility to work when, where<br></br>and how it's best for you. You can easily chat, send audio and<br></br>video clips, or join a huddle to talk things through live.</p>
          <a href="#">Learn more about flexible communication --&gt;</a>
        </div>
        <div class="right_content">
        <video autoPlay muted loop preload="auto"  width={600} height={500}>
            <source src="recording.webm"></source>
          </video>
        </div>
        </div>


        <div class="trustedcontent">
        <div class="left_video_content">
        <video autoPlay muted loop preload="auto"  width={600} height={500}>
            <source src="discussing.webm"></source>
          </video>
        </div>
        <div class="right_trust_content">
          <h2>Bring your team<br></br>together</h2>
          <p>At the heart of Slack are channels: organised spaces for<br></br>everyone and everything that you need for work.<br></br>In channels, it's easier to connect across departments, offices,<br></br>time zones and even other companies.</p>
          <a href="#">Learn more about channels --&gt;</a>
        </div>
        </div>
      </section>
    </body>
  );
}


function Teams()
{
  return(
    <body>
      <div class="teams">
      <center>
        <h1>Teams large and small rely on Slack</h1>
      <h6>Slack securely scales up to support collaboration at the world's biggest companies.</h6>
      <div class="team_button">
        <button id="b1">MEET SLACK FOR ENTERPRISE</button>
        <button id="b2">TALK TO SALES</button>
      </div>
      <div class="percentages">
        <div class="pdata">
          <h1>85%</h1>
          <p>of users say that Slack has<br></br>improved communication*</p>
        </div>
        <div class="pdata">
          <h1>86%</h1>
          <p>feel that their ability to work<br></br>remotely has improved*</p>
        </div>
        <div class="pdata">
          <h1>88%</h1>
          <p>feel more connected to their<br></br>teams*</p>
        </div>
      </div>
      </center>
      </div>


      
      <div class="features">
        <div class="left_feature_content">
        <video autoPlay muted loop preload="auto"  width={600} height={500}>
            <source src="feature.mp4"></source>
          </video>
        </div>
        <div class="right_feature_content">
          <h2>Bring your team<br></br>together</h2>
          <p>At the heart of Slack are channels: organised spaces for<br></br>everyone and everything that you need for work.<br></br>In channels, it's easier to connect across departments, offices,<br></br>time zones and even other companies.</p>
          <a href="#">Learn more about channels --&gt;</a>
        </div>
        </div>
        <p class="featurep">* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
    </body>
  );
}



function Readmore()
{
  return(
    <body>
      <div class="readmorediv">
        <center>
        <h1>Take a deeper dive into a new way to work</h1>
        <div class="allcards">
        <div class="cards">
          <img src="card1.png"></img>
          <p>Event</p>
          <h4>Ready for the future in<br></br>AI in Slack?</h4>
          <a href="#">WATCH ON DEMAND--&gt;</a>
        </div>
        <div class="cards">
          <img src="card2.jpg"></img>
          <p>On demand</p>
          <h4>Big things are launching.<br></br>Relive the highlights of<br></br>World Tour New York!</h4>
          <a href="#">WATCH NOW--&gt;</a>
        </div>
        <div class="cards">
          <img src="card3.jpg"></img>
          <p>Customer story</p>
          <h4>How OpenAI expands<br></br>ChatGPT with Slack.</h4>
          <a href="#">READ MORE--&gt;</a>
        </div>
        <div class="cards">
          <img src="card4.jpg"></img>
          <p>Webminar</p>
          <h4>Top Slack tips to boost<br></br>productivity</h4>
          <a href="#">WATCH NOW--&gt;</a>
        </div>
        </div>
        </center>
      </div>
    </body>
  );
}
function Home()
{
  return(
    <body>
      <div class="homemain">
      <Content/>
      <Trusted_companies/>
      <Teams/>
      <Readmore/>
      </div>
    </body>
  );
}

export default Home;
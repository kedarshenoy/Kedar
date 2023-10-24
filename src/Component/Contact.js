import snapimg from '../Assets/images/snapacc.jpeg';
import telimg from '../Assets/images/telegramacc.jpeg';
import("../Styles/constact.css");
const Contact=()=>{
    
    let open=(num)=>{
        if(num===1){
            window.open(telimg);
    }else  window.open(snapimg);
    }
    return( 
        <>
            <section className="first container">
        <div className="row apps">
            <div className="col-lg-1 col-md-3 col-sm-3 col-2 icons">
            <a href="https://github.com/kedarshenoy"  
                ><img
                src={require('../Assets/images/th (6).jpeg') } alt=""
                width="100%"
                style={{"borderRadius": "20px"}}
            /></a>
            </div>
            <div className="col-lg-1 col-md-3 col-sm-3  col-2 icons">
            <a href="https://linkedin.com/in/argodu-kedar-shenoy" 
                ><img src={require('../Assets/images/th__1_-removebg-preview.png') } alt=""width="100%"
            /></a>
            </div>
            <div className="col-lg-1 col-md-3  col-sm-3 col-2  icons">
            <a href="https://twitter.com/shenoykedara" 
                ><img src={require('../Assets/images/th__2_-removebg-preview.png') } alt="" width="100%"
            /></a>
            </div>
            <div className="col-lg-1 col-md-3 icons col-sm-3 col-2  ">
            <span onClick={()=>{open(1)}}
                ><img src={require('../Assets/images/th__4_-removebg-preview.png') } alt="" width="100%"
            /></span>
            </div>
            <div className="col-lg-1 col-md-3 col-sm-3  col-2 icons">
            <a href="http://discordapp.com/users/mr_aks"
                ><img src= {require('../Assets/images/th__5_-removebg-preview.png') } alt="" width="100%"
            /></a>
            </div>
            <div className="col-lg-1 col-md-3 col-sm-3  col-2 icons">
            <span onClick={()=>{open(2)}}
                ><img src={require('../Assets/images/snapchat-logo-transparent.png') } alt="" width="100%"
            /></span>
            </div>
            <div className="col-lg-1 col-md-3 col-sm-3 col-2  icons">
            <a href="mailto:akedarshenoy@gmail.com" 
                ><img src={require('../Assets/images/th__3_-removebg-preview.png') } alt="" width="100%"
            /></a>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 addrbox">
            <div className="mainbox">
                <div>
                <b
                    >
                        {/* <img
                    src={require('../Assets/images/location-pin-solid.svg') } alt=""
                    height= "25px"
                    style={
                        {
                        "border": "1px solid antiquewhite",
                        "backgroundColor": "white",
                        "borderRadius": "5px",
                        "padding": "1px",
                        
                        } 
                } 
                    /> */}
                    🌍{"Address:"}
                    </b>
                </div>
                <div>{"A Kedar Shenoy"}</div>
                <div>{"Argodu,Kamalashile(Post)"}</div>
                <div>{"Kundapura(Taluk)"}</div>
                <div>{"Udupi(District)"}</div>
                <div>{"Karnataka(State)"}</div>
                <div>{"Pin:576229"}</div>
            </div>
            </div>
            <div className="col-lg-5 col-md-3 col-sm-12 contsec">
            <br />

            <div className="mail addrbox">
                <b>
                    {/* <img
                    src={require('../Assets/images/envelope-regular.svg') } alt=""
                    height="25px"
                    style={
                        {
                        "backgroundColor": "antiquewhite",
                        "borderRadius": "5px",
                        "padding": "1px"
                        }
                    }
                /> */}
               📧{" Email Address:"}
                </b>
            </div>
            <div className="mail addrbox mb-2"><div>{"akedarshenoy@gmail.com"}</div></div>

            <hr style={{"border": "2px solid white", "width": "70%", "marginLeft": "15%"}} />

            <div className="mail addrbox">
                <b
                >
                    {/* <img
                    src={require('../Assets/images/phone-solid.svg') } alt=""
                    style={{
                    "backgroundColor": "antiquewhite",
                    "borderRadius": "5px",
                    "padding": "1px"
                    }}
                /> */}
                📞{"Phone"}</b>
                
            </div>
            <div className="phone addrbox">{"+91 7899106594"}</div>
            </div>
        </div>
        </section>
        
        </>
    )    

}

export default Contact;
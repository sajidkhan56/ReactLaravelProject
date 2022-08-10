import { useState } from 'react';

function AboutUs()
{   
    const [ about_us, setAboutUs] = useState("");

    async function handleSubmit()
    {
        if(about_us == "") {
            window.alert("Please fill the description box");
        }  else {
            let items = {
                'description': about_us
            };

            let result = await fetch('http://localhost:8000/api/aboutus',
            {
              method: 'POST',
              body:JSON.stringify(items),
              headers:{
                  "Content-Type": "application/json",
                  "Accept": "application/json"
              }
            }); 
            result = await result.json();
            window.alert(result.success);
        }      
    }

    return (
        <>
            <div class="form-group row">
                <label className='col-sm-2 col-form-label'>About Us Description:</label>
                    <div className='col-sm-10'>
                        <textarea class="form-control" rows="3" value={about_us} onChange={(e) => setAboutUs(e.target.value)} name="aboutus" ></textarea>
                    </div>
            </div>
            <br />
            <button type="submit" className="btn btn-primary " onClick={handleSubmit} style={{float: 'right'}}>Save</button>
        </>
    );
}

export default AboutUs;
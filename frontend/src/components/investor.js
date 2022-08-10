import {useState} from 'react';

function Investor()
{   
    const [inputdate, setInputdate] = useState("");
    const [inputtitle, setInputtitle] = useState("");
    const [inputdes, setInputdes] = useState("");
    const [inputtype, setInputtype] = useState("Personal Investors");
    const [inputfile, setInputfile] = useState();
    
    function handleSubmit()
    {
        window.alert(inputfile);
        window.alert(inputtype);
        window.alert(inputdes);
        window.alert(inputtitle);
        window.alert(inputdate);
    }

    function setImageChange(e)
    {
        const file = e.target.files[0];
        setInputfile(URL.createObjectURL(file));

    }
    return (
        <>  
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Upload Investor Image:</label>
                <div class="col-sm-10">
                    <input type="file" className="form-control" name='image' onChange={setImageChange}/>
                </div>
            </div>
            <br />

            <div className="form-group row">
                <label className='col-sm-2 col-form-label'>Investor Type:</label>
                <div className='col-sm-10'>
                    <select id="inputState" class="form-control" value={inputtype} onChange={(e) => setInputtype(e.target.value)} >
                        <option selected>Personal Investors</option>
                        <option>Angel Investors</option>
                        <option>Venture Capitalist</option>
                        <option>Others (Peer-to-Peer lending)</option>
                    </select>
                </div>
            </div>
            <br />
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Investment Date:</label>
                <div class="col-sm-10">
                    <input type="date" className="form-control" name='date' value={inputdate} onChange={(e) => setInputdate(e.target.value)}/>
                </div>
            </div>
            <br />
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Investment Title:</label>
                <div class="col-sm-10">
                    <input type="text" className="form-control" name='title' value={inputtitle} onChange={(e) => setInputtitle(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div class="form-group row">
                <label className='col-sm-2 col-form-label'>Investment Description:</label>
                <div className='col-sm-10'>
                    <textarea class="form-control" rows="3" value={inputdes} onChange={(e) => setInputdes(e.target.value)}></textarea>
                </div>
            </div>
            <br />
            <button type="submit" className="btn btn-primary " style={{float: 'right'}} onClick={handleSubmit}>Save</button>               
        </>
    );
}
export default Investor;
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Companydesc() {
    const [record, setRecord] = useState([]);
    const [update, doUpdate] = useState(false);

    const getContent = async () => {
        try {
            const getData = await axios.get('http://localhost:5000/introevents/getIntroEvent')
            console.log("Get Content", getData)
            const contentData = getData.data.data || [];
            setRecord(contentData)
        }
        catch (error) {
            console.log("Error fetching Content data : ", error)
        }
    }
    useEffect(() => {
        getContent();
    }, []);
    return (

        <div>
            {record.map((records) => (
                <div className="container" style={{ marginTop: '6px' }}>
                    <div className="row" style={{ height: '50vh' }}>
                        {/* Content Column with border radius */}
                        <div className="col-lg-6" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0px', borderRadius: '15px' }}>
                            <p>
                                <h3>EVENT MANAGEMENT COMPANY IN AHEMDABAD</h3>
                                {records.comment}
                            </p>
                        </div>
                        {/* Video Column with border radius */}
                        <div className="col-lg-6" style={{ padding: '0', height: '50vh', borderRadius: '15px' }}>
                            <div className="embed-responsive embed-responsive-16by9" style={{ height: '100%', borderRadius: '15px' }}>
                                <iframe
                                    className="embed-responsive-item"
                                    // src='https://www.youtube.com/embed/qV-tFfNPsB8?si=UYsdhAMYCyabKyPl'
                                    src={records.youtubelink}
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                    style={{ width: '100%', height: '100%', borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Companydesc;

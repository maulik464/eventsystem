import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Companydesc() {
    return (
        <div>
            <div className="container" style={{ marginTop: '6px' }}>
                <div className="row" style={{ height: '50vh' }}>
                    {/* Content Column with border radius */}
                    <div className="col-lg-6" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0px', borderRadius: '15px' }}>
                        <p>
                        <h3>EVENT MANAGEMENT COMPANY IN AHEMDABAD</h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    {/* Video Column with border radius */}
                    <div className="col-lg-6" style={{ padding: '0', height: '50vh', borderRadius: '15px' }}>
                        <div className="embed-responsive embed-responsive-16by9" style={{ height: '100%', borderRadius: '15px' }}>
                            <iframe
                                className="embed-responsive-item"
                                src='https://www.youtube.com/embed/qV-tFfNPsB8?si=UYsdhAMYCyabKyPl'
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
        </div>
    );
}

export default Companydesc;

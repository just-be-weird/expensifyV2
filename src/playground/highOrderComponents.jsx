//HOC Higher Order Component -> a HOC component which renders another component
/*
    *Reuse the code
    *Render Hijacking
    *Prop Manipulation
    *Abstract state
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFORMATION</h1>
        <p>The info is: { props.info } </p>
    </div>
);

// withAdminWraning is a regular function which happnes to return HOC.
const withAdminWraning = ( WrappedComponent ) => {
    return (props) => (
        <div>
            { props.isAdmin && <p> This info is confidential,so be carefull with it.</p>}
            <WrappedComponent { ...props } />
        </div>
    );
}
const withAuthWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated && <p>You are logged In!</p> }
            <WrappedComponent { ...props } />
        </div>
    );
}
const AdminInfo = withAdminWraning(Info);
const AuthInfo = withAuthWarning(Info);

// ReactDOM.render(<Info info=" some info was passed down."/>,document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info=" some info was passed down."/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info=" some info was passed down."/>,document.getElementById('app'));
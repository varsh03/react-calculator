import React from 'react';

// Screen row component is written as a functional component
// it receives and displays (in an input field) a props (property) ofvalue from
// it's parent component
const ScreenRow = (props) => {
return (
<div className="screen-row">
<input type="text" readOnly value={props.value}/>
</div>
)
}

// we describe the props (property) that the parent element isrequired to pass
// into this component
ScreenRow.propTypes = {
value: React.PropTypes.string.isRequired
}

export default ScreenRow;
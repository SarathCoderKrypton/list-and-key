import React from 'react';
class ClassProps2 extends React.Component{
    render()
    {
        return<>
            <div>
                <h1>your name is {this.props.details.name}
                    your age is {this.props.details.age}
                </h1>
            </div>
            </>
    }
}
export default ClassProps2
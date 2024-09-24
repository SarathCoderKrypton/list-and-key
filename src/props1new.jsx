import React from 'react';
import ClassProps2 from './props2new';
class ClassProps extends React.Component{
    render()
    {
        let name2 = {name:'sarath',age:'22'}
        return<>
            <div>
                <h1>your name is {this.props.name}</h1>
                <ClassProps2 details = {name2} />
            </div>
            </>
    }
}
export default ClassProps
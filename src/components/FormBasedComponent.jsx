import React, {Component} from "react";

class FormBasedComponent extends Component {
    state = {
        formData: {
            name: "",
            age: 0,
        },
        finalFormData : {}
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = this.state;
        console.log(formData);
        this.setState(prevState => ({
            ...prevState,
            finalFormData : {
                ...prevState.finalFormData,
                ...formData
            },
            formData: {
                name: "",
                age: 0,
            }
        }))
    };

    handleNameChange = (event) => {
       const { value } = event.target;
       this.setState(prevState => ({
           formData : {
               ...prevState.formData,
               name: value
           }
       }));
    };

    handleAgeChange = (event) => {
        const { value } = event.target;
        this.setState(prevState => ({
            formData : {
                ...prevState.formData,
                age: value
            }
        }));
    };

    render() {
        console.log(this.state.finalFormData);
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input name="name" type="text" placeholder="Name" value={this.state.formData.name} onChange={this.handleNameChange} />
                    <input name="age" type="number" placeholder="Age"  value={this.state.formData.age} onChange={this.handleAgeChange} />
                    <button type="submit" aria-label="submit">Submit</button>
                </form>
                {

                    this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0 && (
                        <p>
                            final data is {this.state.finalFormData.name} and {this.state.finalFormData.age}
                        </p>
                    )
                }

            </div>
        );
    }
}

export default FormBasedComponent;
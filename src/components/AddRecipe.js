import React, {Component} from 'react';

class AddRecipe extends Component {
    state={
        recipe_name:'',
        recipe_details:'',
        ingredients:'',
        steps:'',
        imagesrc:''
    }

    formHandler=e=>{
        this.setState({
            [e.target.name]:e.target.value()
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <ul className="Addrecipe-form">
                        <li><label>Recipe name <span className="required">*</span></label><input type="text" name="recipe_name"
                                                                                               className="field-long"
                                                                                               placeholder="Enter your Recipe's name"/>
                            </li>
                        <li>
                            <label>Details</label>
                            <textarea name="recipe_details" className="field-long field-textarea" placeholder="Enter the details of the recipe."></textarea>
                        </li>
                        <li>
                            <label>Ingredients: <span className="required">*</span></label>
                            <textarea name="ingredients" className="field-long field-textarea" placeholder="Separate by comma."/>
                        </li>
                        <li>
                            <label>Steps: <span className="required">*</span></label>
                            <textarea name="steps" className="field-long field-textarea" placeholder="Separate by comma."/>
                        </li>
                        <li>
                            <label>Upload an image: <input type="file" name="imagesrc"/></label>
                        </li>
                        <li>
                            <button name={'Add'} onClick={e=>this.formHandler(e)}>Add</button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default AddRecipe;
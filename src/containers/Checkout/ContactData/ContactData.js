import React, {Component} from "react";
import axios from "axios";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        adress: {
            street: "",
            postalCode: ""
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();

        //alert("You can continue");
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Øyvind",
                address: {
                    street: "Blindern",
                    zip: "0313",
                    country: "Norway"
                },
                email: "oyvjul@gmail.com"
            },
            deliveryMethod: "fastest"

        };

        axios.post("/orders.json", order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: true, purchasing: false});
            });
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="Your Mail"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
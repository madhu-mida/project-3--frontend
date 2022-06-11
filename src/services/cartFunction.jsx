import CONFIG from "../config/index"

function cartFunction(cartObject) {
    console.log("CartFunctionItems", cartObject)

    return (
        fetch(`${CONFIG.PROD.URL}/cart/update`, {
            method: "PUT",
            headers: new Headers({ "Content-Type": "Application/json" }),
            body: JSON.stringify(cartObject),
        })
        
        .then((res) => {
            if (res.ok) return res.json();
            console.log("Error Adding to the Cart")
        })
    );
}

export default cartFunction;
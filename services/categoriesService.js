import axios from "axios";

    export async function findAll() {
        const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_SERVICE}/category`;
        const fetchOptions = {
            endpoint: fetchUrl,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        };
    
        try {
            const data = await fetch(fetchUrl, fetchOptions)
                .then((response) => response.json())
                .catch(error => console.log(error));
            return data;
        } catch (error) {
            throw new Error("Could not fetch categories!");
        }
    }
    
    
    export async function save(category) {
        const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_SERVICE}/category`;
        try {
            let response = await axios.post(fetchUrl, category);
            return response;
        } catch (error) {
            console.log(error);
            throw new Error("Could not create categories!");
        }
    }

    export async function deleteCategory(id) {
        const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_SERVICE}/category/${id}`;
        try {
            let response = await axios.delete(fetchUrl);
            return response;
        } catch (error) {
            console.log(error)
            throw new Error("Could not delete category!");
        }
    }
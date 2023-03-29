import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import axios from "axios";

function UpLoadProduct({ isOpen, onClose }) {

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [fullDesc, setFullDesc] = useState('');
    const [price, setPrice] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [farmerId, setFarmerId] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFullDescChange = (event) => {
        setFullDesc(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleDimensions = (event) => {
        setDimensions(event.target.value);
    };

    const handleImageFileChange = (event) => {
        setProductImage(event.target.files);
    };

    const handleFarmerIdChange = (event) => {
        setFarmerId(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("description", description);
        formData.append("fullDesc", fullDesc);
        formData.append("price", price);
        formData.append("dimensions", dimensions);
        for (let i = 0; i < 4; i++) {
            formData.append("productImages", productImage[i]);
        }
        formData.append("farmerId", farmerId);

        try {
            const response = await axios.post("/api/products", formData)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        onClose();
    }
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <form onSubmit={handleFormSubmit}>
                <DialogTitle
                    sx={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "green"
                    }}
                >
                    Upload a new product
                </DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Product name"
                    type="text"
                    fullWidth
                    value={productName}
                    onChange={handleProductNameChange}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <TextField
                    margin="dense"
                    label="Full Description"
                    multiline
                    rows={3}
                    type="text"
                    fullWidth
                    value={fullDesc}
                    onChange={handleFullDescChange}
                />
                
                <TextField
                    margin="dense"
                    label="Price"
                    type="number"
                    fullWidth
                    value={price}
                    onChange={handlePriceChange}
                />
                <TextField
                    margin="dense"
                    label="Dimensions"
                    type="text"
                    fullWidth
                    value={dimensions}
                    onChange={handleDimensions}
                    />
                <TextField
                    margin="dense"
                    label="Farmer ID"
                    type="text"
                    fullWidth
                    value={farmerId}
                    onChange={handleFarmerIdChange}
                    />
                <TextField
                    margin="dense"
                    label="Image files"
                    type="file"
                    inputProps={{
                        multiple: true
                    }}
                    fullWidth
                    onChange={handleImageFileChange}
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="outlined" color="error">Cancel</Button>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="success"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"
                        }}
                    >
                        Add product
                    </Button>
                </DialogActions>
            </form>
        </Dialog>



    )
}

export default UpLoadProduct;
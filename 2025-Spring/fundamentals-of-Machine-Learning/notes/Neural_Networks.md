# Neural Network



## Fully Connected Feedforward network



![image-20250401150422727](./Neural_Networks.assets/image-20250401150422727.png)

- #parameters = $input \ neurons \times hidden \ neurons + hidden \ neurons \times output \ neurons + hidden \ neurons + output\  neurons$

- **forward pass**

  ![image-20250401152044242](./Neural_Networks.assets/image-20250401152044242.png)

- **Structure**

  ![image-20250510232108117](./Neural_Networks.assets/image-20250510232108117.png)

- **Learning: Adjusting the weights and biases to minimize the output of the cost function**

  - **Cost function**: only one number: Average cost over all training data

  - **Adjusting: backpropagation**: -delta to lower cost

    ![image-20250401153248496](./Neural_Networks.assets/image-20250401153248496.png)
  
    ![image-20250401153300305](./Neural_Networks.assets/image-20250401153300305.png)
  



- Extracted features in the hidden layer are usually meaningless (not interpretable)



## CNN

- why CNN: In fully connected layers, hidden layer activations are hard to interpret. CNN take advantage of local correlations in neighboring pixels
- **kernel**: filter, weights we train
- **feature map**: convolved image after applying filter and bias
- **problem with deep network**
  - **vanishing gradient**: component derivatives are < 1
  - **exploding gradient**: component derivatives are > 1







## Autoencoder

- **Loss function measure reconstruction error (same input output size)**
- **Dimensionality reduction here to find latent space that represents the structure of data in fewer dimesions**

**Self Organizing Map**

![image-20250511025529024](./Neural_Networks.assets/image-20250511025529024.png)

![image-20250511025633790](./Neural_Networks.assets/image-20250511025633790.png)

![image-20250511025728959](./Neural_Networks.assets/image-20250511025728959.png)

![image-20250511025805271](./Neural_Networks.assets/image-20250511025805271.png)

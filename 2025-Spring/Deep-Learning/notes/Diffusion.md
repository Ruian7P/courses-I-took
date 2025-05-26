# Diffusion



## U-Net

![image-20250524020141516](./Diffusion.assets/image-20250524020141516.png)

- **copy and crop: For pixel accuracy**
- **up-conv: For semantic information**





## Diffusion Model

![image-20250524020540868](./Diffusion.assets/image-20250524020540868.png)

#### Forward (Diffusion)

- Gradually adds noise $\beta_{t}$ to data over a series of time steps.

- Transforms the data into pure noise.

- $\alpha_t = 1 - \beta_t$

  $x_t = \sqrt{\alpha_t}x_{t-1} + \sqrt{1-\alpha_t} z_1$, where $z_1$ just represents a Gaussian distribution

  $x_t   = \sqrt{\bar{a_t}}x_0 + \sqrt{1-\bar{a_t}}z_t$, where $\bar{a_t} = a_ta_{t-1}....a_1$



#### Backward (Denoising)

- train to predict either **noise added at each step** or **original data $x_0$**

- Use **Bayesian Theorem**

  ![image-20250524022027927](./Diffusion.assets/image-20250524022027927.png)

  ![image-20250524022112484](./Diffusion.assets/image-20250524022112484.png)![image-20250524032316870](./Diffusion.assets/image-20250524032316870.png)![image-20250524032231841](./Diffusion.assets/image-20250524032231841.png)![image-20250524023630148](./Diffusion.assets/image-20250524023630148.png)

  - $\mu_t$ is the mean of the gaussian distribution of $x_t$ back to $x_{t-1}$
  - How to know noise $z_t$: **Train a neural network to approximate noise**



#### Loss Function

![image-20250524024009131](./Diffusion.assets/image-20250524024009131.png)





- **Overall**

  - **Forward**: ![image-20250525114617176](./Diffusion.assets/image-20250525114617176.png)
  - **Backward:** ![image-20250525114637514](./Diffusion.assets/image-20250525114637514.png)

  - **Training**: Fit $\epsilon_{\theta}$ ($z_t$)





## Diffusion Model with U-Net



#### Training

![image-20250524020141516](./Diffusion.assets/image-20250524020141516.png)

- **Input: noised image $x_{t}$**, where $x_t   = \sqrt{\bar{a_t}}x_0 + \sqrt{1-\bar{a_t}}z_t$, and we have noise $z_t$ (B, img_channel, h, w)
- **For Conv Block at each level**
  1. Initialize Time step embedding (B, t)
  2. After first convolution layer, train a Linear Layer mapping time embedding to out channel (B, out_channel, 1, 1)
  3. add the time step embedding to the feature map (B, out_channel, h, w)
  4. Train second convolution layer
- After feed into the network, we get output noise (B, img_channel, h, w), as the predicted noise $\hat{z_t}$

- **Loss: MSE loss between $z_t$ and $\hat{z_t}$**



#### Inference

1. Start with given t, input image is $x_t$

2. For T =t, t-1, ..., 1:

   - predict $z_T$ with $x_T$

   - compute $\mu_{T}$

     ![image-20250524023630148](./Diffusion.assets/image-20250524023630148.png)

   - sample $x_{T-1}$ from $\mu_{T}$

3. $x_0$ is the desired output









# Stable Diffusion

 

## 1. LDM (SD1.5)



#### **LDM = VAE + DDPM**

![image-20250525122216306](./Diffusion.assets/image-20250525122216306.png)



#### **Conduct Diffusion on Latent Space**

- Why? Why work?
  - In diffusion model, most pixels are used to describe details. 
  - **Cost less time, less resources, and reduce redundant cost for details**



#### **can intergrate more modals**

- how?

  1. **Classifier Guadance**

     - **Train a classifier separately, to guide DM generate sample in this class**

     - **How to add into the DM**

       - **all $x_0, ... x_t$ is under condition y, so their distributions are $p(x_0 | y), ..., p(x_t | y)$**

         ![image-20250525175143765](./Diffusion.assets/image-20250525175143765.png)

         ![image-20250525175158684](./Diffusion.assets/image-20250525175158684.png)

         **unconditioned + classifier adversarial gradient (green term)**

       - add scaling parameter to adjust generation

       ![image-20250525180717242](./Diffusion.assets/image-20250525180717242.png)

       ![image-20250525180727956](./Diffusion.assets/image-20250525180727956.png)

       - **Find classifier adversarial gradient**
         - Train a classifier $p(y|x_t)$, on noised image $x_t$
         - Calculate gradient 

     - **Inference**

       ![image-20250525184140589](./Diffusion.assets/image-20250525184140589.png)

  2. **Classifier Free**

     - why?

       - don't need train a classifier seperately, and don't need noised image as input into classifier

     - **How to add into the DM**

       - **Sampling $p(x_{t−1}∣x_t,y)$**

         $p(x_{t−1}∣x_t,y)∝p(x_{t−1}∣x_t)⋅p(y∣x_{t−1})$

         approximate $p(y | x_{t-1})$ with $p(y|x_t)$

         $μ_θ(x_t,t,y)=μ_θ(x_t,t)+σ^2⋅∇_{x_t}logp(y∣x_t)$

         

       - **Inference**

         ![image-20250525193358101](./Diffusion.assets/image-20250525193358101.png)

         ![image-20250525193404606](./Diffusion.assets/image-20250525193404606.png)

         ![image-20250525193426279](./Diffusion.assets/image-20250525193426279.png)

         ​	From Classfier guide:

         ![image-20250525193633246](./Diffusion.assets/image-20250525193633246.png)

         ​	Since $μ_θ(x_t,t,y)=μ_θ(x_t,t)+σ^2⋅∇_{x_t}logp(y∣x_t)$:

         ![image-20250525193828089](./Diffusion.assets/image-20250525193828089.png)

       - **Training**

         - **y is added as an embeded term as t**

         ![image-20250525193416438](./Diffusion.assets/image-20250525193416438.png)

         ![image-20250525193434485](./Diffusion.assets/image-20250525193434485.png)

         ​	From Classfier guide:

         ![image-20250525193633246](./Diffusion.assets/image-20250525193633246.png)

         ​	Since $μ_θ(x_t,t,y)=μ_θ(x_t,t)+σ^2⋅∇_{x_t}logp(y∣x_t)$:

         ![image-20250525193828089](./Diffusion.assets/image-20250525193828089.png)

         -  **Process**

           ![image-20250525194220887](./Diffusion.assets/image-20250525194220887.png)

  3. **Text Guidance**

     - **similar to classifier free， different way to intergrate**

       - text use **cross attention** instead of adding with time

     - **Training**

       - **process**

         ![image-20250525201759383](./Diffusion.assets/image-20250525201759383.png)

       - **cross attention**
         - Q mapped image features, K and V mapped text token. 





## 2. SDXL

#### 1. **Larger model structure**![image-20250525221811645](./Diffusion.assets/image-20250525221811645.png)



#### 2. More condition control

- **Conditions**

  1. **Add condition for original image size**

     ![image-20250525222009814](./Diffusion.assets/image-20250525222009814.png)

  2. **Add condition for crop parameter**

     ![image-20250525222304455](./Diffusion.assets/image-20250525222304455.png)

  3. **More resolutions**

     ![image-20250525222354381](./Diffusion.assets/image-20250525222354381.png)

- **Intergrate condition controls into model**

  ![image-20250525222626233](./Diffusion.assets/image-20250525222626233.png)



#### 3. Stronger VAE

![image-20250525222727973](./Diffusion.assets/image-20250525222727973.png)



#### 4. Base + Refiner

- **Base training**

  ![image-20250525223105323](./Diffusion.assets/image-20250525223105323.png)

- **Refiner**

  ![image-20250525223611956](./Diffusion.assets/image-20250525223611956.png)![image-20250525223721511](./Diffusion.assets/image-20250525223721511.png)


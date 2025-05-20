# GAN



## KL Divergence

For Probability Distribution P(x) and Q(x), $D_{KL}(P||Q)$ measures how much information lose when we use Q to approximate P

![image-20250520010141142](./GAN.assets/image-20250520010141142.png)

- **KL-Divergence is not symmetric**

  $D_{KL}(P||Q) \neq D_{KL}(Q||P)$

- **KL-Divergence is always non-negative**

  $D_{KL}(P||Q) \geq 0$

  $D_{KL}(P||Q) = 0$ if and only if $P(x) = Q(x)$ for all x





## GAN

#### Concept

- **Generator $G$**: Learns to generate data that resembles the real data.

- **Discriminator $D$**: Learns to distinguish between real and fake data.

- They play a **minimax game**:

  - The discriminator tries not to be fooled

    $max_DD(x_i) + min_DD(G(z_i))$

    $ = max_D[logD(x_i)] + max_D[log[1-D(G(z_i))]]$

  - The generator tries to fool the discriminator

    $\max_GD(G(z_i)) = min_G[log[1-D(G(z_i))]]$



#### **Training Goal**

- For **Discriminator**: ![image-20250520011833186](./GAN.assets/image-20250520011833186.png)

- For **Generator**: ![image-20250520011905378](./GAN.assets/image-20250520011905378.png)



#### **Work Flow**

![image-20250520012014544](./GAN.assets/image-20250520012014544.png)

- Try to make $P_g$ approximate $P_{data}$



#### **Loss function**

![image-20250520012407109](./GAN.assets/image-20250520012407109.png)![image-20250520012431538](./GAN.assets/image-20250520012431538.png)

**Combined final Objective Function**

![image-20250520012524077](./GAN.assets/image-20250520012524077.png)



#### Prove: Why $P_{data} = P_g$ is optimal solution

![image-20250520012900900](./GAN.assets/image-20250520012900900.png)![image-20250520012932740](./GAN.assets/image-20250520012932740.png)![image-20250520013036088](./GAN.assets/image-20250520013036088.png)


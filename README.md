## <p style="text-align:center">👋 Welcome to my Cloud Resume Project on the AWS Cloud 🌐</p>

### ✡ Introduction:

As a software developer, software architect, cloud architect, DevOps engineer, and blogger, establishing a strong online presence sets you apart from the rest. Today, we will embark on the journey of deploying a web-based resume hosted on the AWS Cloud. This project harnesses a comprehensive range of AWS services to elevate your resume into a dynamic, interactive, and effortlessly accessible portfolio.

### 📚 Prerequisites

1. ✅ Basic understanding of HTML, CSS, and JavaScript
2. ✅ Basic understanding of React
3. ✅ AWS Account (if you want to deploy your own resume)
4. ✅ Install Nodejs (if you want to run your own application)

### 🔍🎯 Learning Objectives

1. ✅ Learn how to host a website on the AWS
2. ✅ Learn how to use AWS S3 Static website hosting feature
3. ✅ Learn how to make your website accessible without making your s3 bucket public
4. ✅ Learn how to improve user experience and reduce latency by utilizing content delivery network.
5. ✅ Learn how to create AWS CloudFront distribution
6. ✅ Learn how to manage DNS records in the AWS
7. ✅ Learn how to enable SSL certificate

### ⚙ Technologies Used:

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![Amazon AWS](https://img.shields.io/badge/Amazon%20AWS-232F3E?style=flat-square&logo=amazon-aws)
![Amazon S3](https://img.shields.io/badge/-Amazon%20S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
<img src="./route53.svg" alt="Amazon Route53" width="25" height="25">
<img src="./cloudfront.svg" alt="Amazon CloudFront" width="25" height="25">
<img src="./certificatemanager.svg" alt="Amazon Certificate Manager" width="25" height="25">

## ⌛ Set up Locally:

1. ✅ Clone the Repository
2. ✅ Open the code in your favorite code editor
3. ✅ Open integrated terminal provided your code editor
4. ✅ Switch into frontend directory and Run `npm install` to download dependencies
5. ✅ Run `npm run start` command under frontend folder to run it

## Create S3 Bucket:

1. Open AWS Management Console and in the search input type s3.
2. Once you've located Amazon S3 in the search results, click on it to access the S3 dashboard.
3. On the S3 dashboard, click the `create bucket` button.
   ![Create Bucket](/screenshots/image-1.png)
4. In the bucket name (Bucket must be globally unique), you need to add your domain name. The subdomain will also be good to go.
5. Choose the AWS region that best aligns with your location and the geographical needs of your customers.
6. Unless you have specific requirements, leave the remaining settings at their default values.
   ![Bucket created](/screenshots/image-2.png)

## Build the frontend Application

1. Launch the integrated terminal within your code editor and navigate to the "frontend" directory.
2. Execute the following command to generate production-ready code: npm run build.
   ![Build created](/screenshots/image-3.png)
3. Verify that a "build" folder has been successfully created following the execution of the npm run build command.

## Transfer Files and Folders from the 'Build' Directory

1. Under the objects tab, click the `upload` button to upload.
2. Then click the `Add folder` button and `Add Files` button to upload all files and folders from `build` folder
   ![upload button](/screenshots/image-4.png)
3. Verify that all the files and folders are uploaded successfully and click `upload` to upload them
   ![upload button](/screenshots/image-5.png)
4. Once all the objects are uploaded to your s3 bucket, now your bucket will look like this
   ![objects upload](/screenshots/image-6.png)

## Enable Static Website hosting feature

1. Under properties tab, scroll down to the bottom of the page.
2. Find the `Static website hosting` section and click the edit button
   ![websites hosting](/screenshots/image-7.png)
3. Enable Static website hosting feature and add the following in the index document input field
   ![Enabled](/screenshots/image-8.png)
   ![Enabled](/screenshots/image-9.png)

## Create Route53 Hosted Zone (Only if you have another domain registrar such as Godday)

1. Open AWS Management Console and in the search input type `route53`.
2. Once you've located Amazon Route53 in the search results, click on it to access the Route53 dashboard.
3. Click the `Hosted Zones` from sidebar panel and then click `create hosted zone` button.
4. Enter your domain name. Make sure your domain name matches the domain that you entered while registering the domain.
5. Unless you have specific requirements, leave the remaining settings at their default values.
   ![Created Hosted Zone](/screenshots/image-11.png)
6. Go back to the hosted zones and select the created hosted zone and locate the name servers.
   ![nameservers](/screenshots/image-12.png)

## DNS Delegation

1. Open your DNS Registrar console / dashboard and find how you can change nameservers record.
2. [Porkbun](https://porkbun.com/) is my domain registrar.
3. Before changing the NS records in the domain registrar
   ![before](/screenshots/image-13.png)
4. Now copy each NS record entry from AWS hosted zone and replace with given NS records within the domain registrar
   ![Updated NS Records](/screenshots/image-14.png)

To enable HTTPS for secure communication, you will create SSL certificate using AWS Certificate Manager

## Create a certificate

1. Open AWS Management Console and in the search input type `certificate manager`.
2. Once you've located Amazon Certificate Manager in the search results, click on it to access the Certificate Manager dashboard.
3. Click the `Request a certificate` button.
4. Certificate type, choose public.
5. Enter your domain name in the FQDN field
6. For validation, Choose DNS Validation and Click the `Request` button.
   ![Certificate Requested](/screenshots/image-15.png)
7. As you can see that the status of the certificate is saying `pending validation`. To pass the validation click on the `view certificate`.
8. Go back to AWS Hosted Zone an create a CNAME Record with these name and value.
   ![CNAME Record](/screenshots/image-16.png)
   ![Added Record](/screenshots/image-17.png)
9. Wait for the validation check to complete.

## Create Origin Access Control

1. From CloudFront Dashboard, Select origin access tab from the sidebar under settings pane and click the `create control settings` button.
   ![OAC](/screenshots/image-23.png)
2. Enter the name and click the `create` button.
   ![OAC created](/screenshots/image-24.png)

## Create CloudFront Distribution

1. Open AWS Management Console and in the search input type `cloudfront` to choose
2. Once you've located Amazon CloudFront in the search results, click on it to access the CloudFront dashboard.
3. Click the `create a CloudFront distribution` button.
   ![Create distribution](/screenshots/image-10.png)
4. Type the name of your S3 bucket and choose the bucket from search result.
   ![copy url](/screenshots/image-18.png)
5. For Origin Access, Choose the OAC setting and select the Origin Access Control created from previous step.
   ![OAC Setting](/screenshots/image-19.png)
6. For viewer protocol policy, select `Redirect HTTP to HTTPS` option
   ![viewer protocol](/screenshots/image-20.png)
7. For Default Root Object, type `index.html` there.
   ![Default Root Object](/screenshots/image-32.png)
8. For settings sections, Add your custom domain name in the `Alternate domain name` field and select the SSL after certificate has been passed validation check.
   ![certificate](/screenshots/image-21.png)
9. Copy the Policy and go back to AWS S3 bucket
   ![Policy object](/screenshots/image-25.png)
10. Under permissions tab, find the `Bucket Policy` section and click the `Edit` button to edit the policy
    ![Policy object](/screenshots/image-26.png)
    ![Policy object](/screenshots/image-27.png)
11. Copy the distribution domain name and paste in the browser to access your digital resume.
    ![Distribution DNS name](/screenshots/image-28.png)

Congratulations! you have deployed your cloud resume on AWS

![Cloud resume](/screenshots/image-29.png)

## Add Alias DNS Record in AWS Hosted Zone

We will access the resume through custom domain. The custom domain should be matched with SSL certificate

1. Go back to the Hosted Zone and click the `create record` button to add new record set.
   ![New Record Set](/screenshots/image-30.png)
2. Select the `Simple Routing`
3. Update the setting according to the your configuration.
   ![Simple Routing](/screenshots/image-31.png)

![Cloud Resume AWS](/screenshots/image-33.png)

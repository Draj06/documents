(C) COPYRIGHT 2015 WIZnet

   * author : IOP Team
   * version : V1.0.0
   * date : 1-May-2015
   * brief : Description of making a new Keil Project of W7500.
   * develop environment : Windows 7 32/64bits, Keil Version 5.10
---

## Introduction

This application note is a tutorial for making a KEIL project for W7500 MCU. This document show you how to make a project and a bin file for W7500 step by step in order for you to follow up easily.

### STEP 1. Download and install KEIL5!

![keil0](../img/keil0.jpg)
 
   * Download MDK-ARM v5 : [KEIL5](https://www.keil.com/download/product/)
   * Installation instructions, please see the Link : [Install](How-to-install-Keil-uVision-MDK-Lite-version.md)
   
### STEP 2. Download W7500 Library!

![keil1](../img/keil1.jpg)

You can download W7500 Library from WIZnet's Github repository : [W7500 Library](https://github.com/Wiznet/W7500)

### STEP 3. make workspace! and move the W7500 Library to workspace!

![keil2](../img/keil2.jpg)

In this example, it is **D:\workspace\project\Library**

### 



In this example, it is **D:\workspace\project\Library**

### Execute KEIL5 and make new project!

![keil3](../img/keil3.jpg)

Click to New uVision Project...

![keil4](../img/keil4.jpg)

Select a project save folder and choose project name. In this example, **D:\workspace\project\W7500_test\W7500_Test.uvproj**

![keil5](../img/keil5.jpg)

Choose 'Cortex-M0' because W7500 MCU is based on Cortex-M0

### STEP 5. W7500 start up code and system code setting!

![keil7](../img/keil7.jpg)

Return to project. You need to make the same folders like the image which is shown on right side

![keil8](../img/keil8.jpg)

![keil9](../img/keil9.jpg)

![keil10](../img/keil10.jpg)

![keil11](../img/keil11.jpg)

![keil12](../img/keil12.jpg)

![keil13](../img/keil13.jpg)

Follow like upper images.

![keil14](../img/keil14.jpg)

And in the same way... CMSIS Folder include D:\workspace\project\Libraries\CMSIS\Device\WIZnet\W7500\Source\system_W7500.c file

W7500_Periphs folder includes Peripherals to use.

And User folder has to include main.c and so on.

Let's make main.c

![keil15](../img/keil15.jpg)

Click to Add New Item to the Group.

![keil16](../img/keil16.jpg)

Select C file and Name it with 'main' and click 'Add'.

![keil17](../img/keil17.jpg)

Include **w7500x.h** header but... you should show red X because you did not path.

### STEP 6. setting for include paths

![keil18](../img/keil18.jpg)

Click to Options for Target...

![keil19](../img/keil19.jpg)

Select 'Include Paths' in C\C++ tap and click the folder icon and click to ... icon

![keil20](../img/keil20.jpg)

![keil](../img/keil_.jpg)

Set 'include path' with

**D:\workspace\project\Libraries\CMSIS\Device\WIZnet\W7500\Include D:\workspace\project\Libraries\W7500x_stdPeriph_Driver\inc 
D:\workspace\project\Libraries\CMSIS\Include**

![keil21](../img/keil21.jpg)

### STEP 7. Memory setting!

![keil18](../img/keil18.jpg)

Click "Options for Target..."

![keil22-1](../img/keil22-1.jpg)

![direction_down](../img/direction_down.jpg)

![keil22-2](../img/keil22-2.jpg)

Click "Target" tap and set with the values which are shown in above pictures

![keil23](../img/keil23.jpg)

And click "Linker" tap and check Use Memory Layout from Target Dialog

### STEP 8. Selection of Peripherals to use

![keil18](../img/keil18.jpg)

Click "Options for Target..."

![keil24](../img/keil24.jpg)

Click "C/C++" tap and add **CORTEX_M0 USE_STDPERIPH_DRIVER** in "Define" field.

### STEP 9. Setting user program to use with the created bin file

![keil18](../img/keil18.jpg)

Click "Options for Target..."

![keil25](../img/keil25.jpg)

Click "User" tap and check "Run #1" in "Run User Programs After Build/Rebuild" section
and write this command **fromelf --bin -o "$L@L.bin" "#L"** in order CMSIS DAP to use the bin file.

### STEP 10. Compile the example

![keil26](../img/keil26.jpg)

Let's compile the example code in **D:\workspace\project\Projects\Peripheral_Examples\GPIO\Blink_LED** This fold consists of **main.c, W7500x_conf.h, W7500x_it.c** and **W7500x_it.h** and you should copy these four files to **D:\workspace\project\W7500_Test**(my project folder)

![keil27](../img/keil27.jpg)

And copy W7500x_gpio.c into W7500_Periphs folder in order to use gpio peripheral
![keil28](../img/keil28.jpg)

And copy **W7500x_it.c** into User folder for interrupt handlers

Add "Include Path" for **W7500x_conf.h** and **W7500x_it.h**

![keil18](../img/keil18.jpg)

Click "Options for Target..."

![keil19](../img/keil19.jpg)

Click "Include Paths" in C\C++ tap, "folder icon and ... icon

![keil29](../img/keil29.jpg)

Set "include path" with **D:\workspace\project\W7500_Test**

![keil30](../img/keil30.jpg)

Now compile this project!! by pressing **F7** or clicking **Build icon**

![keil31](../img/keil31.jpg)

After compile, **W7500_Test.bin** file will be created. And then WIZwiki-W7500 will upload this bin file on itself via the User program you registered.

![pdf](../img/pdf.jpg)

If you want to convert this document to the PDF file? Click to [Export to PDF]
 
 
                      **© COPYRIGHT 2015 WIZnet Co.,Ltd.**
                 




























  


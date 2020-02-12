(C) COPYRIGHT 2015 WIZnet

  * author : IOP Team
  * version : V1.0.0
  * date : 1-May-2015
  * brief : Description use a makefile with windows7.
  * develop environment : Windows 7 32/64bits
  * arm-gcc version : gcc-arm-none-eabi-4_9-2015q1-20150306-win32
---

## Step1 gunwin32 Installation

      ※ For reference, gunwin32 operate both windows7 32bit and 64bit

1.Enter a gnuwin32 in web search engine or visit the [http://gnuwin32.sourceforge.net/](http://gnuwin32.sourceforge.net/)     

![1_gnuwin32](../img/1_gnuwin32.jpg)

2.Click the packages in left category.

![2_gnuwin32](../img/2_gnuwin32.jpg)

3.Find the **Make** file using scroll and click, Click the **Setup program** in Download.

![3_gnuwin32](../img/3_gnuwin32.jpg)

4.When download time left as '0', you get the **setup file**.

![4_gnuwin32](../img/4_gnuwin32.jpg)

5.Finish the setup,copy the program setup path(you reach until **make.exe)**

![5_gnuwin32](../img/5_gnuwin32.jpg)

6.In my case,the setup path is **C:\Program Files\GnuWin32\bin**

![6_gnuwin32](../img/6_gnuwin32.jpg)

7.**Computer > click the right of mouse > properties > Advanced > Environment Variables > System variables > Edit>** ** variable value** Copy and Paste.

![7_gnuwin32](../img/7_gnuwin32.jpg)

---

## Step2 arm gcc Installation

1.You can download the setup file from the ["https://launchpad.net/gcc-arm-embedded/+download"](https://launchpad.net/gcc-arm-embedded/+download) (main post of 2015.04.16)

![1_armgcc](../img/1_armgcc.jpg)

2.Download the [gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe](https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe) because I use the Windows7 32bit.

3.After choice the Language selection, click the 'OK'

![2_armgcc](../img/2_armgcc.jpg)

4.The installation path setup and click the **'NEXT'**, click the **'NEXT'** again.

![4_armgcc](../img/4_armgcc.jpg)

5.Finally,Check the box **"Add path to environment variale"** and click the 'Finish' (If you check the box, It will automatically set the environment variable.)

![5_armgcc](../img/5_armgcc.jpg)

6.The command window will be opened,you can know the arm gcc setup path it.

![6_make](../img/6_make.jpg)

7.Confirm the version of arm gcc using the command of below.

  > arm-none-eabi-gcc --version
  
![7_make](../img/7_make.jpg)

---

## Step3 execute the makefile

1.You set the path, you want to compile gcc compile. and enter the  **make**

>**make**

![8_make](../img/8_make.jpg)

2.You can see the compile as below.

![9_make](../img/9_make.jpg)

3.If success, the files will create. The path of make file is a place the makefile.

![10_make](../img/10_make.jpg)

---

## When compile error occur

**If you can't compile** or **you don't create the files**,you directly set the environment variable

>**omputer > click the right of mouse > properties > Advanced > Environment Variables > System variables > Edit> variable value** Copy and Paste.

>Copy path is **c:\Program Files\GNU Tools ARM Embedded\4.9 2015q1\bin** : setup path

![7_gnuwin32](../img/7_gnuwin32.jpg)







  
  
  
  















---
id: doc1
title:PRODUCTS
sidebar_label: iMCU
---
<a href="https://url-to-pdf-api.herokuapp.com/api/render?url=location.href=true">Save this page as PDF</a>

<!DOCTYPE html> 
<html> 
  
<head> 
    <title>Get current URL using jQuery?</title> 
</head> 
  
<body> 
    <h1 style="color: green">GeeksForGeeks</h1> 
    <b>Get current URL using jQuery?</b> 
    <p>Click on the button below to get the current page URL</p> 
    <p> The current URL is: <span class="output"></span></p> 
    <button id="btn">Get current </button> 
    <script src= 
            "https://code.jquery.com/jquery-3.3.1.min.js"> 
  </script> 
    <script> 
        $('#btn').click(function() { 
            currLoc = $(location).attr('href'); 
            document.querySelector('.output').textContent = currLoc; 
        }); 
    </script> 
</body> 
  

**Ethernet MCU with Hardwired TCP/IP Core**

## Overview

IOP is the Internet Offload Processor, the one-chip solution that integrates MCU and Hardwired TCP/IP cores.

## Product Family

 * [W7500](W7500.md): ARM Cortex-M0, 128KB Flash, Hardwired TCP/IP, 802.3 Ethernet MAC
 * [W7500P](W7500P.md):  ARM Cortex-M0, 128KB Flash, Hardwired TCP/IP, 802.3 Ethernet MAC w/**PHY**
 * 🌍[W7100A](https://www.wiznet.io/product-item/w7100a/):80c51 compatible core, 64KB Flash, Hardwired TCP/IP, MAC w/**PHY**
 
 
### Etc.
 
## Sidebar

  * [iMCU sidebar](iMCU-sidebar.md)

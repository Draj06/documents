---
id: doc1
title:PRODUCTS
sidebar_label: iMCU
---
<a href="https://restpack.io/html2pdf/save-as-pdf" target="_blank">Save this page as PDF</a>
<script id="finalReport" type="text/x-kendo-template">
    <h3 class="report-header">stub title</h3>
    <table class="report-table">
        <tr>
            <td>Report ID:</td>
            <td>stub</td>
        </tr>
    </table>
</script>

<style>
  .report-header {
        font-style: italic;
        font-weight: bold;
        text-align: left;
    }
</style>

<script id="main" type="text/javascript">
    function generateReport() {
        return xepOnline.Formatter.Format("finalReport", {
            render: 'download', pageWidth: '216mm', pageHeight: '279mm'
        });
    }
</script>

### **iMCU**

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

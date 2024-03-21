// ==UserScript==
// @name         Random Hat Teller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  To tell you which item of random hat is and what prices they are being sold for.
// @author       9th Jaco
// @match        *://mannco.store/item/440-random-craft-hat
// @match        *://mannco.store/item/440-*
// @match        *://mannco.store/404/
// @match        *://steamcommunity.com/profiles/*/inventory/*
// @require      http://code.jquery.com/jquery-latest.min.js
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mannco.store
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @connect      *
// @homepageURL  https://github.com/The9thJaco/Mannco-Random-Hat-Enhancer
// @downloadURL  https://github.com/The9thJaco/Mannco-Random-Hat-Enhancer/blob/main/Random_Hat_Teller.user.js
// @updateURL    https://github.com/The9thJaco/Mannco-Random-Hat-Enhancer/blob/main/Random_Hat_Teller.user.js
// ==/UserScript==
(function() {
    'use strict';
    function SlotPriceFunc(){
        //console.clear()
        for (let i = -1; i <= 25; i++){
            var I1add = i+1
            var ItemList = document.getElementsByClassName("itemListPagination  ")[i]
            var tableTop = document.getElementsByClassName("table table-striped table-items")[0]
            var SlotPrice = tableTop.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML

            if(tableTop){
                tableTop.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'Buy Orders'
                tableTop.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = 'Selling Prices'
                if(SlotPrice != MuchPay){
                    let COCKINYOU = tableTop.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
                    COCKINYOU.insertAdjacentHTML('afterend','<th scope="col">'+MuchPay+'</th>')
                }
            }
            if(SlotPrice == MuchPay){
                var ogPRICE = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
                var ogPRICE2 = ItemList.firstElementChild.nextElementSibling.nextElementSibling
                let Pricing = ogPRICE.outerHTML.replaceAll('class="ecurrency"','class="'+MuchPay+'"')
                ogPRICE.innerHTML = 'Getting Buy Order Of List Item #'+I1add
                ogPRICE.style = 'color: #cc66ff;'
                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.insertAdjacentHTML('afterend', Pricing);
                ogPRICE2.innerHTML = 'Getting Price Of List Item #'+I1add
                ogPRICE2.style = 'color: #cc66ff;'
            }

            /*
            let tableTopElement = tableTop.firstElementChild.outerHTML
            var bodyClass = document.getElementsByTagName('style')[0];
            var content = 'div.sticky {position: -webkit-sticky;position: sticky;top: 10px;}'
            if(i<0){
                bodyClass.insertAdjacentHTML('beforeend', content);
            }
            var divClass = document.getElementsByClassName("sticky")[0]
            if(!divClass){
                tableTop.firstElementChild.remove()
                let div = document.createElement("div")

                div.id = "tableTopElementStickyDiv";
                div.setAttribute('class','sticky')
                div.sticky = 'position: sticky;top: sticky;'
                div.insertAdjacentHTML('beforeend', tableTopElement)
                tableTop.insertAdjacentHTML('afterstart',div.outerHTML)
                //div.appendChild(tableTopElement)
            }
            */
        }
    }
    function All(){
        var NextPage =document.getElementsByClassName("page-item next no")[0]
        if(NextPage){
            NextPage.addEventListener("click", AllNums);//page-item no
            if(document.getElementsByClassName("page-item previous no")[0]){document.getElementsByClassName("page-item previous no")[0].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item previous no")[1]){document.getElementsByClassName("page-item previous no")[1].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item no")[0]){document.getElementsByClassName("page-item no")[0].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item no")[1]){document.getElementsByClassName("page-item no")[1].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item no")[2]){document.getElementsByClassName("page-item no")[2].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item no")[3]){document.getElementsByClassName("page-item no")[3].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item out-of-range")[0]){document.getElementsByClassName("page-item out-of-range")[0].addEventListener("click", AllNums)}
            if(document.getElementsByClassName("page-item out-of-range")[1]){document.getElementsByClassName("page-item out-of-range")[1].addEventListener("click", AllNums)}
        }
    }
    function AllNums(){
        var wait1sec = 1000
        var wait10sec = 10000
        All()
        if(document.URL == 'https://mannco.store/item/440-random-craft-hat'){setTimeout(SlotPriceFunc, (wait1sec*5))}
        setTimeout(zero_five, (wait10sec/2))
        setTimeout(six_ten, (wait10sec*2))
        setTimeout(ii_5teen, (wait10sec*3))
        setTimeout(Sixteen_20, (wait10sec*4))
        setTimeout(TwoZero_2five, (wait10sec*5))
    }
    function SteamBut(){
        var SteamUserName = document.getElementsByClassName("whiteLink persona_name_text_content")[0]
        let TryAgainButton = document.body.getElementsByClassName("btnv6_blue_hoverfade btn_small retry_load_btn")[0]
        var hoverItem = document.body.getElementsByClassName("hover_item_name")[1]//error_ctn
        var message = document.getElementById("message")////message
        var RealItemname = 'RealItemname'
        function Steam(){
            RealItemname = hoverItem.innerHTML
            RealItemname = RealItemname.replaceAll(" ", "-")
            RealItemname = RealItemname.replaceAll("'", "")
            var newURL = 'https://mannco.store/item/440-' + RealItemname;
            window.location.replace(newURL)
        }
        if(SteamUserName && SteamUserName.innerHTML.includes("Mannco")){
            if(TryAgainButton){
                window.location.reload(true)
            }
            else{
                if(hoverItem){
                    Steam()
                }
            }
        }
        else{
            if(message && message.innerText.includes("You've made too many requests recently. Please wait and try your request again later."))
            {
                window.location.replace('https://mannco.store/404/')
            }
            if(document.URL.includes("https://steamcommunity.com/profiles/")){
                console.warn('This is not the Mannco Inventory, will not bother this steam account')
            }
        }
    }
    var UnknownImage = 'https://th.bing.com/th/id/R.ae5dd7cda492bd09069e3f4258783279?rik=8R8qzyRjGs4R7w&riu=http%3a%2f%2fmedia.steampowered.com%2fsteamcommunity%2fpublic%2fimages%2favatars%2fb5%2fb599127509772f2125568318a38f24e64881de61_full.jpg&ehk=LPrFbuLXwSQCuR4FA4PhF6%2ffdxe1PxLQ45u56I2AIF0%3d&risl=&pid=ImgRaw&r=0'

    var zerofive = 4
    var sixten = 9
    var ii5teen = 14
    var Sixteen20 = 19
    var TwoZero2five = 24

    var iframeScale = 1;
    var randomOtherTime = Math.floor((Math.random() * 5000) + 5000); //Does it between 5 to 10 seconds
    var MuchPay = 'Price'
    //charges you 5%
    //.insertAdjacentHTML('afterend','<th scope="col">How Much You Pay</th>')
    function zero_five(){
        for (let i = -1; i <= zerofive; i++)
        {
            function get_contents_name(Button, filename, ItemList) {
                if(Button)
                {
                    const iframe = document.createElement("iframe");
                    //iframe.style.display = "none";
                    iframe.id = 'steam_item_display_'+i
                    iframe.width = iframeScale
                    iframe.height = iframeScale
                    iframe.src = filename
                    Button.appendChild(iframe)
                }
            }
            function ChangeNameImage(ItemList, SteamButton){
                if(ItemList)
                {
                    function NameImage(){
                        //console.clear()
                        var SteamIframe = document.getElementById('steam_item_display_'+i)
                        var SteamIframeFrames = document.getElementById('steam_item_display_'+i).contentWindow.document;if(SteamIframeFrames){var Frames = SteamIframe.contentWindow.document;}
                        var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
                        if(Frames && !Frames.URL.includes('mannco.store/404/'))
                        {
                            var nameTest = SteamIframe.contentWindow.document.getElementsByClassName("item-type unique thisll")[0].innerHTML
                            var ManncoImageName = SteamIframe.contentWindow.document.getElementsByClassName("item-thumbnail")[0].src
                            var ManncoSellPrice = SteamIframe.contentWindow.document.getElementsByClassName("table table-striped table table-striped")[0].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML
                            var SellingForPrice = SteamIframe.contentWindow.document.getElementsByClassName("important-text ")[0]
                            //ecurrency
                            let IframeLocation = SteamIframe.contentWindow.location.href
                            if(SteamIframe.parentElement.href.includes('https://steamcommunity.com/profiles/'))
                            {
                                SteamIframe.parentElement.href = IframeLocation
                                SteamIframe.src= IframeLocation
                            }
                        }
                        var ItemImage = ''
                        var instantSellPrice = ManncoSellPrice
                        var ItemName = ''
                        var sellPrice = instantSellPrice

                        if(SteamIframe.contentWindow.document.URL.includes('mannco.store/404/')||SteamIframe.contentWindow.document.URL.includes('https://steamcommunity.com/profiles/')){
                            SteamButton.firstChild.nodeValue = 'Failed To Load'
                            SteamButton.style = 'color: #ed5d5d;'
                            nameTest = 'Failed To Load Item'
                            ItemImage = UnknownImage
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +UnknownImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #ed5d5d;'
                            sellPrice = 'Failed To Get Buy Orders'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                        }
                        else{
                            if(nameTest.includes("null")){ItemImage = UnknownImage}
                            else{ItemImage = ManncoImageName}
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +ItemImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            SteamButton.firstChild.nodeValue = 'Item is "'+nameTest+'"'
                            SteamButton.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            let SFP = SellingForPrice.innerText.replaceAll(' each','');ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = SFP;SFP.replaceAll('$','');
                            //var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
                            let FeeSFP = Number(SFP.replaceAll('$',''));let FeeText = Pricing.replaceAll('$','');let FeeNum = (Math.ceil((Number(FeeText)*0.05)*100))/100;let Fee = ((Math.ceil((Number(FeeText)-(FeeNum))*100))/100)+0.03;
                            //var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;let FeeSFP = Number(SFP.replaceAll('$',''));let FeeText = Pricing.replaceAll('$','');let FeeNum = (Math.ceil((Number(FeeText)*0.05)*100))/100;let Fee = ((Math.ceil((Number(FeeText)-(FeeNum))*100))/100)+0.03;

                            if(FeeSFP <= Fee){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                            if(sellPrice == '$0.00'||sellPrice == '$0.01'||sellPrice == '$0.02'||sellPrice == '$0.03'||sellPrice == '$0.04'||sellPrice == '$0.05'){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;';
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                        }
                        //Remove Local Storage Items after 10 seconds
                    }
                    if(ItemList.firstElementChild.nextElementSibling.innerHTML.includes('Random Craft Hat')){setInterval(NameImage, 10000)}

                    setTimeout(NameImage, 20000)
                }
            }
            function NewPage(){
                setTimeout(ChangeMainName, 2000) //wait 2 secs before executing
                console.log('Reloading List Of items')
            }
            function ChangeMainName(){
                console.clear()
                var tableTop = document.getElementsByClassName("table table-striped table-items")[0]
                var ItemList = document.getElementsByClassName("itemListPagination  ")[i]//'"LOADING"List Item #' + I1add
                let SteamButtonXpath = "//a[text()=' View on Steam ']";
                let SteamButton = document.evaluate(SteamButtonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                var I1add = i+1
                if(SteamButton&&i>=0){
                    SteamButton.innerHTML = '"LOADING"List Item #' + I1add;SteamButton.style = 'color: #cc66ff;'
                    var site = SteamButton.href;
                }

                get_contents_name(SteamButton, site, ItemList)
                ChangeNameImage(ItemList,SteamButton)
                console.log(i);
            }
            switch(document.URL){
                case 'https://mannco.store/item/440-random-craft-hat':
                    setTimeout(ChangeMainName, 3000)
                    //setInterval(NewPage, 600000);//reload list every 10 minutes
                    console.log('MAIN')
                    break;
                default:
                    setTimeout(SteamBut, randomOtherTime)
                    console.log('OTHER')
            }
        }
    }
    function six_ten(){
        for (let i = 5; i <= sixten; i++)
        {
            function get_contents_name(Button, filename, ItemList) {
                if(Button)
                {
                    const iframe = document.createElement("iframe");
                    //iframe.style.display = "none";
                    iframe.id = 'steam_item_display_'+i
                    iframe.width = iframeScale
                    iframe.height = iframeScale
                    iframe.src = filename
                    Button.appendChild(iframe)
                }
            }
            function ChangeNameImage(ItemList, SteamButton){
                if(ItemList)
                {
                    function NameImage(){
                        //console.clear()
                        var SteamIframe = document.getElementById('steam_item_display_'+i)
                        var SteamIframeFrames = document.getElementById('steam_item_display_'+i).contentWindow.document;if(SteamIframeFrames){var Frames = SteamIframe.contentWindow.document;}
                        if(Frames && !Frames.URL.includes('mannco.store/404/'))
                        {
                            var nameTest = SteamIframe.contentWindow.document.getElementsByClassName("item-type unique thisll")[0].innerHTML
                            var ManncoImageName = SteamIframe.contentWindow.document.getElementsByClassName("item-thumbnail")[0].src
                            var ManncoSellPrice = SteamIframe.contentWindow.document.getElementsByClassName("table table-striped table table-striped")[0].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML
                            let IframeLocation = SteamIframe.contentWindow.location.href
                            var SellingForPrice = SteamIframe.contentWindow.document.getElementsByClassName("important-text ")[0]
                            if(SteamIframe.parentElement.href.includes('https://steamcommunity.com/profiles/'))
                            {
                                SteamIframe.parentElement.href = IframeLocation
                                SteamIframe.src= IframeLocation
                            }
                        }
                        var ItemImage = ''
                        var instantSellPrice = ManncoSellPrice



                        //console.log(IframeLocation)
                        var ItemName = ''
                        var sellPrice = instantSellPrice

                        if(SteamIframe.contentWindow.document.URL.includes('mannco.store/404/')||SteamIframe.contentWindow.document.URL.includes('https://steamcommunity.com/profiles/')){
                            SteamButton.firstChild.nodeValue = 'Failed To Load'
                            SteamButton.style = 'color: #ed5d5d;'
                            nameTest = 'Failed To Load Item'
                            ItemImage = UnknownImage
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +UnknownImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #ed5d5d;'
                            sellPrice = 'Failed To Get Buy Orders'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                        }
                        else{
                            if(nameTest.includes("null")){ItemImage = UnknownImage}
                            else{ItemImage = ManncoImageName}
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +ItemImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            SteamButton.firstChild.nodeValue = 'Item is "'+nameTest+'"'
                            SteamButton.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            let SFP = SellingForPrice.innerText.replaceAll(' each','');ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = SFP;SFP.replaceAll('$','')
                            var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;let FeeSFP = Number(SFP.replaceAll('$',''));let FeeText = Pricing.replaceAll('$','');let FeeNum = (Math.ceil((Number(FeeText)*0.05)*100))/100;let Fee = ((Math.ceil((Number(FeeText)-(FeeNum))*100))/100)+0.03;
                            if(FeeSFP <= Fee){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                            if(sellPrice == '$0.00'||sellPrice == '$0.01'||sellPrice == '$0.02'||sellPrice == '$0.03'||sellPrice == '$0.04'||sellPrice == '$0.05'){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                        }
                        //Remove Local Storage Items after 10 seconds
                    }
                    if(ItemList.firstElementChild.nextElementSibling.innerHTML.includes('Random Craft Hat')){setInterval(NameImage, 10000)}

                    setTimeout(NameImage, 20000)
                }
            }
            function NewPage(){
                setTimeout(ChangeMainName, 2000) //wait 2 secs before executing
                console.log('Reloading List Of items')
            }
            function ChangeMainName(){
                console.clear()
                var tableTop = document.getElementsByClassName("table table-striped table-items")[0]
                var ItemList = document.getElementsByClassName("itemListPagination  ")[i]
                let SteamButtonXpath = "//a[text()=' View on Steam ']";
                let SteamButton = document.evaluate(SteamButtonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if(SteamButton){
                    var I1add = i+1
                    SteamButton.innerHTML = '"LOADING"List Item #' + I1add;SteamButton.style = 'color: #cc66ff;'
                    var site = SteamButton.href;
                }
                get_contents_name(SteamButton, site, ItemList)
                ChangeNameImage(ItemList,SteamButton)
                console.log(i);
            }
            switch(document.URL){
                case 'https://mannco.store/item/440-random-craft-hat':
                    setTimeout(ChangeMainName, 3000)
                    //setInterval(NewPage, 600000);//reload list every 10 minutes
                    console.log('MAIN')
                    break;
                default:
                    setTimeout(SteamBut, randomOtherTime)
                    console.log('OTHER')
            }
        }
    }
    function ii_5teen(){
        for (let i = 10; i <= ii5teen; i++)
        {
            function get_contents_name(Button, filename, ItemList) {
                if(Button)
                {
                    const iframe = document.createElement("iframe");
                    //iframe.style.display = "none";
                    iframe.id = 'steam_item_display_'+i
                    iframe.width = iframeScale
                    iframe.height = iframeScale
                    iframe.src = filename
                    Button.appendChild(iframe)
                }
            }
            function ChangeNameImage(ItemList, SteamButton){
                if(ItemList)
                {
                    function NameImage(){
                        //console.clear()
                        var SteamIframe = document.getElementById('steam_item_display_'+i)
                        var SteamIframeFrames = document.getElementById('steam_item_display_'+i).contentWindow.document;if(SteamIframeFrames){var Frames = SteamIframe.contentWindow.document;}
                        if(Frames && !Frames.URL.includes('mannco.store/404/'))
                        {
                            var nameTest = SteamIframe.contentWindow.document.getElementsByClassName("item-type unique thisll")[0].innerHTML
                            var ManncoImageName = SteamIframe.contentWindow.document.getElementsByClassName("item-thumbnail")[0].src
                            var ManncoSellPrice = SteamIframe.contentWindow.document.getElementsByClassName("table table-striped table table-striped")[0].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML
                            let IframeLocation = SteamIframe.contentWindow.location.href
                            var SellingForPrice = SteamIframe.contentWindow.document.getElementsByClassName("important-text ")[0]
                            if(SteamIframe.parentElement.href.includes('https://steamcommunity.com/profiles/'))
                            {
                                SteamIframe.parentElement.href = IframeLocation
                                SteamIframe.src= IframeLocation
                            }
                        }
                        var ItemImage = ''
                        var instantSellPrice = ManncoSellPrice



                        //console.log(IframeLocation)
                        var ItemName = ''
                        var sellPrice = instantSellPrice

                        if(SteamIframe.contentWindow.document.URL.includes('mannco.store/404/')||SteamIframe.contentWindow.document.URL.includes('https://steamcommunity.com/profiles/')){
                            SteamButton.firstChild.nodeValue = 'Failed To Load'
                            SteamButton.style = 'color: #ed5d5d;'
                            nameTest = 'Failed To Load Item'
                            ItemImage = UnknownImage
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +UnknownImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #ed5d5d;'
                            sellPrice = 'Failed To Get Buy Orders'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                        }
                        else{
                            if(nameTest.includes("null")){ItemImage = UnknownImage}
                            else{ItemImage = ManncoImageName}
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +ItemImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            SteamButton.firstChild.nodeValue = 'Item is "'+nameTest+'"'
                            SteamButton.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            let SFP = SellingForPrice.innerText.replaceAll(' each','');ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = SFP;SFP.replaceAll('$','')
                            var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;let FeeSFP = Number(SFP.replaceAll('$',''));let FeeText = Pricing.replaceAll('$','');let FeeNum = (Math.ceil((Number(FeeText)*0.05)*100))/100;let Fee = ((Math.ceil((Number(FeeText)-(FeeNum))*100))/100)+0.03;
                            if(FeeSFP <= Fee){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                            if(sellPrice == '$0.00'||sellPrice == '$0.01'||sellPrice == '$0.02'||sellPrice == '$0.03'||sellPrice == '$0.04'||sellPrice == '$0.05'){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                        }
                        //Remove Local Storage Items after 10 seconds
                    }
                    if(ItemList.firstElementChild.nextElementSibling.innerHTML.includes('Random Craft Hat')){setInterval(NameImage, 10000)}

                    setTimeout(NameImage, 20000)
                }
            }
            function NewPage(){
                setTimeout(ChangeMainName, 2000) //wait 2 secs before executing
                console.log('Reloading List Of items')
            }
            function ChangeMainName(){
                console.clear()
                var tableTop = document.getElementsByClassName("table table-striped table-items")[0]
                var ItemList = document.getElementsByClassName("itemListPagination  ")[i]
                let SteamButtonXpath = "//a[text()=' View on Steam ']";
                let SteamButton = document.evaluate(SteamButtonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                //RemoveElements()
                if(SteamButton){
                    var I1add = i+1
                    SteamButton.innerHTML = '"LOADING"List Item #' + I1add;SteamButton.style = 'color: #cc66ff;'
                    var site = SteamButton.href;
                }

                get_contents_name(SteamButton, site, ItemList)
                ChangeNameImage(ItemList,SteamButton)
                console.log(i);
            }
            switch(document.URL){
                case 'https://mannco.store/item/440-random-craft-hat':
                    setTimeout(ChangeMainName, 3000)
                    //setInterval(NewPage, 600000);//reload list every 10 minutes
                    console.log('MAIN')
                    break;
                default:
                    setTimeout(SteamBut, randomOtherTime)
                    console.log('OTHER')
            }
        }
    }
    function Sixteen_20(){
        for (let i = 15; i <= Sixteen20; i++)
        {
            function get_contents_name(Button, filename, ItemList) {
                if(Button)
                {
                    const iframe = document.createElement("iframe");
                    //iframe.style.display = "none";
                    iframe.id = 'steam_item_display_'+i
                    iframe.width = iframeScale
                    iframe.height = iframeScale
                    iframe.src = filename
                    Button.appendChild(iframe)
                }
            }
            function ChangeNameImage(ItemList, SteamButton){
                if(ItemList)
                {
                    function NameImage(){
                        //console.clear()
                        var SteamIframe = document.getElementById('steam_item_display_'+i)
                        var SteamIframeFrames = document.getElementById('steam_item_display_'+i).contentWindow.document;if(SteamIframeFrames){var Frames = SteamIframe.contentWindow.document;}
                        if(Frames && !Frames.URL.includes('mannco.store/404/'))
                        {
                            var nameTest = SteamIframe.contentWindow.document.getElementsByClassName("item-type unique thisll")[0].innerHTML
                            var ManncoImageName = SteamIframe.contentWindow.document.getElementsByClassName("item-thumbnail")[0].src
                            var ManncoSellPrice = SteamIframe.contentWindow.document.getElementsByClassName("table table-striped table table-striped")[0].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML
                            let IframeLocation = SteamIframe.contentWindow.location.href
                            var SellingForPrice = SteamIframe.contentWindow.document.getElementsByClassName("important-text ")[0]
                            if(SteamIframe.parentElement.href.includes('https://steamcommunity.com/profiles/'))
                            {
                                SteamIframe.parentElement.href = IframeLocation
                                SteamIframe.src= IframeLocation
                            }
                        }
                        var ItemImage = ''
                        var instantSellPrice = ManncoSellPrice



                        //console.log(IframeLocation)
                        var ItemName = ''
                        var sellPrice = instantSellPrice

                        if(SteamIframe.contentWindow.document.URL.includes('mannco.store/404/')||SteamIframe.contentWindow.document.URL.includes('https://steamcommunity.com/profiles/')){
                            SteamButton.firstChild.nodeValue = 'Failed To Load'
                            SteamButton.style = 'color: #ed5d5d;'
                            nameTest = 'Failed To Load Item'
                            ItemImage = UnknownImage
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +UnknownImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #ed5d5d;'
                            sellPrice = 'Failed To Get Buy Orders'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                        }
                        else{
                            if(nameTest.includes("null")){ItemImage = UnknownImage}
                            else{ItemImage = ManncoImageName}
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +ItemImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            SteamButton.firstChild.nodeValue = 'Item is "'+nameTest+'"'
                            SteamButton.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            let SFP = SellingForPrice.innerText.replaceAll(' each','');ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = SFP;SFP.replaceAll('$','')
                            var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;let FeeSFP = Number(SFP.replaceAll('$',''));let FeeText = Pricing.replaceAll('$','');let FeeNum = (Math.ceil((Number(FeeText)*0.05)*100))/100;let Fee = ((Math.ceil((Number(FeeText)-(FeeNum))*100))/100)+0.03;
                            if(FeeSFP <= Fee){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                            if(sellPrice == '$0.00'||sellPrice == '$0.01'||sellPrice == '$0.02'||sellPrice == '$0.03'||sellPrice == '$0.04'||sellPrice == '$0.05'){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                        }
                        //Remove Local Storage Items after 10 seconds
                    }
                    if(ItemList.firstElementChild.nextElementSibling.innerHTML.includes('Random Craft Hat')){setInterval(NameImage, 10000)}

                    setTimeout(NameImage, 20000)
                }
            }
            function NewPage(){
                setTimeout(ChangeMainName, 2000) //wait 2 secs before executing
                console.log('Reloading List Of items')
            }
            function ChangeMainName(){
                console.clear()
                var tableTop = document.getElementsByClassName("table table-striped table-items")[0]
                var ItemList = document.getElementsByClassName("itemListPagination  ")[i]
                var NextPage =document.getElementsByClassName("page-item next no")[0]
                let SteamButtonXpath = "//a[text()=' View on Steam ']";
                let SteamButton = document.evaluate(SteamButtonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                //RemoveElements()
                if(SteamButton){
                    var I1add = i+1
                    SteamButton.innerHTML = '"LOADING"List Item #' + I1add;SteamButton.style = 'color: #cc66ff;'
                    var site = SteamButton.href;
                }

                get_contents_name(SteamButton, site, ItemList)
                ChangeNameImage(ItemList,SteamButton)
                console.log(i);
            }
            switch(document.URL){
                case 'https://mannco.store/item/440-random-craft-hat':
                    setTimeout(ChangeMainName, 3000)
                    //setInterval(NewPage, 600000);//reload list every 10 minutes
                    console.log('MAIN')
                    break;
                default:
                    setTimeout(SteamBut, randomOtherTime)
                    console.log('OTHER')
            }
        }
    }
    function TwoZero_2five(){
        for (let i = 20; i <= TwoZero2five; i++)
        {
            function get_contents_name(Button, filename, ItemList) {
                if(Button)
                {
                    const iframe = document.createElement("iframe");
                    //iframe.style.display = "none";
                    iframe.id = 'steam_item_display_'+i
                    iframe.width = iframeScale
                    iframe.height = iframeScale
                    iframe.src = filename
                    Button.appendChild(iframe)
                }
            }
            function ChangeNameImage(ItemList, SteamButton){
                if(ItemList)
                {
                    function NameImage(){
                        //console.clear()
                        var SteamIframe = document.getElementById('steam_item_display_'+i)
                        var SteamIframeFrames = document.getElementById('steam_item_display_'+i).contentWindow.document;if(SteamIframeFrames){var Frames = SteamIframe.contentWindow.document;}
                        if(Frames && !Frames.URL.includes('mannco.store/404/'))
                        {
                            var nameTest = SteamIframe.contentWindow.document.getElementsByClassName("item-type unique thisll")[0].innerHTML
                            var ManncoImageName = SteamIframe.contentWindow.document.getElementsByClassName("item-thumbnail")[0].src
                            var ManncoSellPrice = SteamIframe.contentWindow.document.getElementsByClassName("table table-striped table table-striped")[0].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML
                            let IframeLocation = SteamIframe.contentWindow.location.href
                            var SellingForPrice = SteamIframe.contentWindow.document.getElementsByClassName("important-text ")[0]
                            if(SteamIframe.parentElement.href.includes('https://steamcommunity.com/profiles/'))
                            {
                                SteamIframe.parentElement.href = IframeLocation
                                SteamIframe.src= IframeLocation
                            }
                        }
                        var ItemImage = ''
                        var instantSellPrice = ManncoSellPrice



                        //console.log(IframeLocation)
                        var ItemName = ''
                        var sellPrice = instantSellPrice

                        if(SteamIframe.contentWindow.document.URL.includes('mannco.store/404/')||SteamIframe.contentWindow.document.URL.includes('https://steamcommunity.com/profiles/')){
                            SteamButton.firstChild.nodeValue = 'Failed To Load'
                            SteamButton.style = 'color: #ed5d5d;'
                            nameTest = 'Failed To Load Item'
                            ItemImage = UnknownImage
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +UnknownImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #ed5d5d;'
                            sellPrice = 'Failed To Get Buy Orders'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                        }
                        else{
                            if(nameTest.includes("null")){ItemImage = UnknownImage}
                            else{ItemImage = ManncoImageName}
                            ItemName = '<td> '+nameTest+'<div class="item-magnifier"> <div class="item-magnifier-header"> <img loading="lazy" src="' +ItemImage+ '" alt="" title=" " class="item-magnifier-thumbnail"> <span class="item-magnifier-name"> <span class=" text-unique "> '+nameTest+'</span></span> </div> <p class="item-magnifier-description"> </p> </div> </td>'
                            SteamButton.firstChild.nodeValue = 'Item is "'+nameTest+'"'
                            SteamButton.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.innerHTML = ItemName
                            ItemList.firstElementChild.nextElementSibling.style = 'color: #5ad1e8;'
                            ItemList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = sellPrice
                            let SFP = SellingForPrice.innerText.replaceAll(' each','');ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = SFP;SFP.replaceAll('$','')
                            var Pricing = ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;let FeeSFP = Number(SFP.replaceAll('$',''));let FeeText = Pricing.replaceAll('$','');let FeeNum = (Math.ceil((Number(FeeText)*0.05)*100))/100;let Fee = ((Math.ceil((Number(FeeText)-(FeeNum))*100))/100)+0.03;
                            if(FeeSFP <= Fee){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                            if(sellPrice == '$0.00'||sellPrice == '$0.01'||sellPrice == '$0.02'||sellPrice == '$0.03'||sellPrice == '$0.04'||sellPrice == '$0.05'){
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #ed5d5d;'
                            }
                            else{
                                ItemList.firstElementChild.nextElementSibling.nextElementSibling.style = 'color: #479f32;'
                            }
                        }
                        //Remove Local Storage Items after 10 seconds
                    }
                    if(ItemList.firstElementChild.nextElementSibling.innerHTML.includes('Random Craft Hat')){setInterval(NameImage, 10000)}

                    setTimeout(NameImage, 20000)
                }
            }
            function NewPage(){
                setTimeout(ChangeMainName, 2000) //wait 2 secs before executing
                console.log('Reloading List Of items')
            }
            function ChangeMainName(){
                console.clear()
                var tableTop = document.getElementsByClassName("table table-striped table-items")[0]
                var ItemList = document.getElementsByClassName("itemListPagination  ")[i]
                let SteamButtonXpath = "//a[text()=' View on Steam ']";
                let SteamButton = document.evaluate(SteamButtonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if(SteamButton){
                    var I1add = i+1
                    SteamButton.innerHTML = '"LOADING"List Item #' + I1add;SteamButton.style = 'color: #cc66ff;'
                    var site = SteamButton.href;
                }

                get_contents_name(SteamButton, site, ItemList)
                ChangeNameImage(ItemList,SteamButton)
                console.log(i);
            }
            switch(document.URL){
                case 'https://mannco.store/item/440-random-craft-hat':
                    setTimeout(ChangeMainName, 3000)
                    //setInterval(NewPage, 600000);//reload list every 10 minutes
                    console.log('MAIN')
                    break;
                default:
                    setTimeout(SteamBut, randomOtherTime)
                    console.log('OTHER')
            }
        }
    }
    AllNums()
    // Your code here...
})();

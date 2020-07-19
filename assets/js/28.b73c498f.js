(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{369:function(t,e,i){t.exports=i.p+"assets/img/BTCPayInvoiceExport.16389f9c.png"},547:function(t,e,i){"use strict";i.r(e);var o=i(26),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"accounting-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accounting-in-btcpay"}},[t._v("#")]),t._v(" Accounting in BTCPay")]),t._v(" "),o("p",[t._v("BTCPay Server offers several tools that make cryptocurrency bookkeeping easier.")]),t._v(" "),o("h2",{attrs:{id:"invoice-export"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#invoice-export"}},[t._v("#")]),t._v(" Invoice Export")]),t._v(" "),o("figure",[o("img",{attrs:{src:i(369),alt:"Invoice exporting in BTCPay Server"}})]),t._v(" "),o("p",[t._v("To export the invoices, go to Invoices > Export invoices, select the export format (CSV/JSON) and download the file. You can then customize the fields to fit your business needs and import the data into your accounting software, or create pivot tables from the exported data.")]),t._v(" "),o("p",[t._v("The fields are the following:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"center"}},[t._v("Field name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("ReceivedDate")]),t._v(" "),o("td",[t._v("Date the payment has been received")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("StoreId")]),t._v(" "),o("td",[t._v("The store receiving the payment")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("OrderId")]),t._v(" "),o("td",[t._v("The order Id of the invoice")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceId")]),t._v(" "),o("td",[t._v("The invoice ID")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceCreatedDate")]),t._v(" "),o("td",[t._v("Date of creation of the invoice")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceExpirationDate")]),t._v(" "),o("td",[t._v("Date of expiration of the invoice")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceMonitoringDate")]),t._v(" "),o("td",[t._v("Date your BTCPay Server ceases to monitor events of the invoice")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("PaymentId")]),t._v(" "),o("td",[t._v("Unique identifier of a payment")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("Destination")]),t._v(" "),o("td",[t._v("The destination address the customer paid to")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("PaymentType")]),t._v(" "),o("td",[t._v("The type of payment ("),o("code",[t._v("OnChain")]),t._v(", "),o("code",[t._v("Offchain")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("CryptoCode")]),t._v(" "),o("td",[t._v("Currency code of the method of payment (e.g. "),o("code",[t._v("BTC")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("Paid")]),t._v(" "),o("td",[t._v("Amount paid in the currency defined in CryptoCode")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("NetworkFee")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#add-network-fee-to-invoice-vary-with-mining-fees"}},[t._v("Network fee")]),t._v(" paid by the user in this payment")],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("ConvertionRate")]),t._v(" "),o("td",[t._v("The conversion rate at the time of invoice creation between "),o("code",[t._v("CryptoCode")]),t._v(" and "),o("code",[t._v("InvoiceCurrency")])])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceCurrency")]),t._v(" "),o("td",[t._v("The currency code of the invoice (e.g. "),o("code",[t._v("USD")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceDue")]),t._v(" "),o("td",[t._v("The amount still due to fully pay the invoice after this payment (minus "),o("code",[t._v("NetworkFee")]),t._v(", denominated in "),o("code",[t._v("InvoiceCurrency")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoicePrice")]),t._v(" "),o("td",[t._v("The total price of the invoice (minus Network Fee, denominated in "),o("code",[t._v("InvoiceCurrency")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceItemCode")]),t._v(" "),o("td",[t._v("The item code afferent to the products/services billed by the invoice")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceItemDesc")]),t._v(" "),o("td",[t._v("The item description afferent to the products/services billed by the invoice")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceFullStatus")]),t._v(" "),o("td",[t._v("The full status of the invoice (e.g. "),o("code",[t._v("expired (paidPartial)")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceStatus")]),t._v(" "),o("td",[t._v("The simplified status of the invoice (e.g. "),o("code",[t._v("expired")]),t._v(")")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("InvoiceException")]),t._v(" "),o("td",[t._v("The status of the invoice (e.g. "),o("code",[t._v("paidPartial")]),t._v(")")])])])]),t._v(" "),o("h2",{attrs:{id:"quickbooks-online-connector-for-btcpay-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quickbooks-online-connector-for-btcpay-server"}},[t._v("#")]),t._v(" QuickBooks Online Connector for BTCPay Server")]),t._v(" "),o("p",[t._v("BTCQBO is a third-party plugin that enables QuickBooks Online users to connect their BTCPay server easily. Besides bookkeeping, users can quickly generate invoices from their QuickBooks. For more information about the BTCQBO and all the features it offers, "),o("a",{attrs:{href:"https://github.com/JeffVandrewJr/btcqbo",target:"_blank",rel:"noopener noreferrer"}},[t._v("check the plugin repository"),o("OutboundLink")],1),t._v(" or watch the video below.")]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/srgwL9ozg6c/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=srgwL9ozg6c","data-id":"srgwL9ozg6c"}},[o("iframe",{attrs:{title:"YouTube: BTCPay Server QuickBooks","data-src":"https://www.youtube-nocookie.com/embed/srgwL9ozg6c?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);
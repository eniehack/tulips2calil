let info_elem = document.getElementById("detailkMenu");
if (info_elem !== null) {
    info_elem.querySelector(".c_related_materials_panel_info");
    let isbn = document.evaluate("//div[@id=\"lid_major_detail_1\"]//dt[text()=\"ISBN\"]/following-sibling::dd/p/text()", document, null, XPathResult.STRING_TYPE, null).stringValue;

    if (isbn !== "") {
        const node = document.createElement("p");
        const link_elem = document.createElement("a");
        link_elem.setAttribute("href", `https://calil.jp/book/${isbn}`);
        link_elem.setAttribute("target", "_blank");
        link_elem.setAttribute("rel", "noreferer noopener");
        link_elem.appendChild(document.createTextNode("calil"));
        node.appendChild(link_elem);
        console.log("node", node);
        info_elem.appendChild(node);
    }
}


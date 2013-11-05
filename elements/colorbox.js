/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 *
 */
// #ifdef __AMLCOLORBOX || __INC_ALL
apf.colorbox = function(struct, tagName){
    this.$init(tagName || "colorbox", apf.NODE_VISIBLE, struct);
};

(function(){
    this.implement(
        
        apf.DataAction,
        
        apf.ChildValue
    );

    var _self = this;
    
    this.$focussable = false;
    var forElement;
    
    
    
    /**
     * Sets the value of this element. This should be one of the values
     * specified in the values attribute.
     * @param {String} value The new value of this element
     */
    this.setValue = function(value){
        this.setProperty("value", value, false, true);
    };
    
    /**
     * Returns the current value of this element.
     * @return {String} The current value
     */
    this.getValue = function(){
        return this.value;
    }
    
    
    
    /** 
     * @attribute {String} caption Sets or gets the text displayed in the area defined by this 
     * element. Using the value attribute provides an alternative to using
     * the text using a text node.
     *
     */
    /**
     * @attribute {String} for Sets or gets the id of the element that receives the focus 
     * when the colorbox is clicked on.
     */
    /**
     * @attribute {String} textalign Sets or gets the text alignment value for the colorbox.
     */
    this.$supportedProperties.push("value");
    this.$propHandlers["value"] = function(value){
        this.$input.value = value;
    };

    this.$draw = function(){
        //Build Main Skin
        this.$ext = this.$getExternal();
        this.$input = this.$getLayoutNode("main", "input", this.$ext);
        
        var _self = this;
        this.$input.onchange = function(){
            _self.change(this.value);
        }
    };
    
    this.$childProperty = "value";
    
}).call(apf.colorbox.prototype = new apf.BaseSimple());

apf.aml.setElement("colorbox", apf.colorbox);
//#endif

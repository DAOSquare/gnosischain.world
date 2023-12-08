import React, { PureComponent } from 'react';

import NavItem, { SwitchNetworkItem } from './NavItem';
import NavExpandItem from './NavExpandItem';
import ItemSkeleton from './ItemSkeleton';

class NavItemList extends PureComponent {

  render() {
    const { tag, navList, language } = this.props;
    if (!(navList || []).length) {
      return <ItemSkeleton />
    }
    const list = (navList || []).filter((item) => item.tag_en === tag);
    let node = [];
    // let len = list.length <= 12 ? 12 : 11;
    node = list.map((item, index) => (
      <> 
        {item.tag_en === "Tools & Resources" && item.name_en === "Switch to GnosisChain" ? <SwitchNetworkItem
          key={index} 
          item={item}
          language={language}
        /> : <NavItem
          key={index}
          item={item}
          language={language}
        />
        }
      </>
    ));
    // if (list.length > 12) {
    //   node.push(
    //     <NavExpandItem
    //       key="NavExpandItem"
    //       list={list}
    //       language={language}
    //     />
    //   );
    // }
    return node;
  }

}

export default NavItemList;

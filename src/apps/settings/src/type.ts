/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { z } from "zod";
import { zFloorpDesignConfigs } from "../../../apps/common/scripts/global-types/type";

export const zDesignFormData = z.object({
  // Global
  design: zFloorpDesignConfigs.shape.globalConfigs.shape.userInterface,
  faviconColor: z.boolean(),

  // Tab Bar
  style: zFloorpDesignConfigs.shape.tabbar.shape.tabbarStyle,
  position: zFloorpDesignConfigs.shape.tabbar.shape.tabbarPosition,

  // Tab
  tabOpenPosition: zFloorpDesignConfigs.shape.tab.shape.tabOpenPosition,
  tabMinHeight: zFloorpDesignConfigs.shape.tab.shape.tabMinHeight,
  tabMinWidth: zFloorpDesignConfigs.shape.tab.shape.tabMinWidth,
  tabPinTitle: zFloorpDesignConfigs.shape.tab.shape.tabPinTitle,
  tabScroll: zFloorpDesignConfigs.shape.tab.shape.tabScroll.shape.enabled,
  tabScrollReverse: zFloorpDesignConfigs.shape.tab.shape.tabScroll.shape.reverse,
  tabScrollWrap: zFloorpDesignConfigs.shape.tab.shape.tabScroll.shape.wrap,
  tabDubleClickToClose: zFloorpDesignConfigs.shape.tab.shape.tabDubleClickToClose,
});

export type DesignFormData = z.infer<typeof zDesignFormData>;

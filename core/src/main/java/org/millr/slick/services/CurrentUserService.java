/*
 * Copyright 2016 Chris Millar
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.millr.slick.services;

import org.apache.jackrabbit.api.security.user.User;
import org.apache.sling.api.resource.ResourceResolver;

public interface CurrentUserService {

    boolean getAuthorable(ResourceResolver resourceResolver);
    
    String getUserId(ResourceResolver resourceResolver);
    
    String getFullName(ResourceResolver resourceResolver);
    
    String getFirstName(ResourceResolver resourceResolver);
    
    String getLastName(ResourceResolver resourceResolver);
}
import React from 'react'

import './dashSearch.styles.scss'

const DashSearch = () => {
  return (
    <div className='dashSearchWrapper'>
        <form action='#'>
            <div class="searchForm__list">
                <div className='searchForm__ip1 form_group'>
                    <label className='form_label'>I am a</label>
                        <select className='form_select'>
                            <option>Select Gender</option>
                            <option value="male" >Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    
                </div>
                <div className='searchForm__ip2 form_group'>
                    <label className='form_label'>Looking for</label>
                
                        <select className='form_select'>
                            <option>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female" >Female</option>
                            <option value="others">Others</option>
                        </select>
                    
                </div>
                <div className='searchForm__ip3 form_group'>
                <label className='form_label'>Age</label>
                    <div class="searchForm__ip3-flex">
                        <div class="col-6">                            
                            <select className='form_select'>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                        <div class="col-6">                            
                            <select className='form_select'>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='searchForm__ip4 form_group'>
                    <label className='form_label'>Religion</label>
                    
                        <select className='form_select'>
                            <option value="Any">Any</option> 
                            <option value="5">Hindu</option>
                            <option value="8">Christian</option>
                            <option value="6">Muslim</option>
                            <option value="9">Jain</option>
                            <option value="10">Parsi</option>
                            <option value="11">Sikh</option>
                            <option value="12">Buddhist</option>
                            <option value="13">Inter-Religion</option>
                            <option value="14">No Religion</option>
                        </select>
                    
                </div>
                <button type='submit' className='btn btn--orange dataSearchBtn '>Search</button>
            </div>
        </form>
    </div>
  )
}

export default DashSearch
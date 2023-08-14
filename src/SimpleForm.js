import React from 'react';

function SimpleForm() {
  return (
    <div>
      <h1>Request a Test drive</h1>
      <form name="myForm">
        <label htmlFor="Salutation">Salutation*</label><br />
        <input type="radio" id="Mr." name="Salutation" value="Mr." required />
        <label htmlFor="Mr.">Mr.</label><br />
        <input type="radio" id="Mrs." name="gender" value="Mrs." />
        <label htmlFor="Mrs.">Mrs.</label>
        <br /><br />
        <label htmlFor="fname">Name*</label><br />
        <input type="text" id="fullname" name="fullname" required /><br /><br />
        <label htmlFor="mNum">Mobile number*</label><br />
        <input
          type="tel"
          id="mNum"
          name="mNum"
          placeholder="Enter your mobile number"
          required
          pattern="[0-9]{10}"
        />
        <br />
        <small>Format: 10 digits, e.g. 1234567890</small>
        <br /><br />
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" />
        <br /><br />
        <label htmlFor="carBrand">Model interested in*</label>
        <select id="carBrand" name="carBrand">
          <option value="Grand i10">Grand i10</option>
          <option value="All new i20">All new i20</option>
          <option value="Kona electric">Kona electric</option>
          <option value="Aura">Aura</option>
          <option value="New venue">New venue</option>
          <option value="New creta">New creta</option>
        </select>
        <br /><br />
        <label htmlFor="transmission">Transmission*</label>
        <select id="transmission" name="transmission">
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        <br /><br />
        <label htmlFor="dealer">Dealer*</label>
        <select id="dealer" name="dealer">
          <option value="Popular Hyundai">Popular Hyundai</option>
          <option value="Mgf Hyundai">Mgf Hyundai</option>
        </select>
        <br /><br />
        <label htmlFor="dateTime">Preferred test drive (date and time)*:</label>
        <input type="datetime-local" id="dateTime" name="dateTime" />
        <br /><br />
        <input
          type="checkbox"
          id="T&C"
          name="T&C"
          value="T&C"
          required
        />
        <label htmlFor="T&C">I accept the terms & conditions</label><br /><br />
        <input type="submit" id="submit" value="Submit" />
        {/* onClick={() => myFunction()} */}
      </form>
      <script src="index.js"></script>
    </div>
  );
}

export default SimpleForm;